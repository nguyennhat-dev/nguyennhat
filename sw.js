// Service worker cho english://master
// Mỗi lần sửa index.html và đẩy lên GitHub, hãy tăng số phiên bản bên dưới
// để thiết bị tải bản mới và dọn cache cũ.
const VERSION = 'v4';
const CACHE = 'english-master-' + VERSION;
const CORE = [
  './',
  './index.html',
  './manifest.json',
  './vocab-extra.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      // Lưu từng file riêng: thiếu một file (vd icon) không làm hỏng cả service worker
      .then((c) => Promise.all(CORE.map((u) => c.add(u).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('english-master-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Trang chính: ưu tiên mạng (để nhận bản mới), mất mạng thì dùng bản đã lưu
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          // Chỉ lưu trang hợp lệ (200). Trang lỗi 404 không được ghi đè bản offline.
          if (res && res.ok && res.type === 'basic'){
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put('./index.html', copy));
          }
          return res;
        })
        .catch(() => caches.match('./index.html').then((r) => r || caches.match('./')))
    );
    return;
  }

  // Font Google và file cùng domain: trả bản cache ngay, cập nhật ngầm
  const sameOrigin = url.origin === self.location.origin;
  const isFont = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (sameOrigin || isFont) {
    event.respondWith(
      caches.match(req).then((cached) => {
        const fetching = fetch(req)
          .then((res) => {
            if (res && (res.ok || res.type === 'opaque')) {
              const copy = res.clone();
              caches.open(CACHE).then((c) => c.put(req, copy));
            }
            return res;
          })
          .catch(() => cached);
        return cached || fetching;
      })
    );
  }
});
