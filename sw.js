/* Service Worker: lưu app vào bộ nhớ để mở được khi không có mạng.
   Chiến lược "trả bản đã lưu trước, cập nhật ngầm sau": đổi bản mới trên GitHub thì lần mở kế tiếp sẽ dùng bản mới. */
const C='nocturne-v3',FILES=['./','index.html','icon.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(caches.open(C).then(async c=>{
    const hit=await c.match(e.request,{ignoreSearch:true});
    const net=fetch(e.request).then(r=>{if(r&&r.ok)c.put(e.request,r.clone());return r}).catch(()=>null);
    return hit||(await net)||c.match('index.html');
  }));
});
