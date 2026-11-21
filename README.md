# english://master

Ứng dụng học từ vựng tiếng Anh (chạy hoàn toàn trên trình duyệt, không cần máy chủ).

## Đưa lên GitHub Pages
1. Tạo repository mới trên GitHub (ví dụ `english-master`), để **Public**.
2. Tải **toàn bộ file và thư mục `icons/`** lên nhánh `main` (index.html, sw.js, manifest.json, vocab-extra.js, icons/).
   File `index.html` phải nằm ở thư mục gốc của repository.
3. Vào **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*, Branch = `main`, thư mục `/ (root)` → Save.
4. Chờ 1–2 phút, trang chạy tại `https://<tên-github>.github.io/english-master/`.

## Khi sửa code về sau
- Sửa `index.html` hoặc `vocab-extra.js` xong, **tăng số `VERSION` trong `sw.js`** (v3 → v4) để mọi thiết bị nhận bản mới.
- Dữ liệu học (XP, streak, từ hay sai, yêu thích, bộ từ riêng) lưu trong trình duyệt của từng thiết bị (localStorage).
  Mỗi thiết bị/trình duyệt có dữ liệu riêng. Dùng **Thống kê → Xuất sao lưu** để chuyển sang máy khác hoặc phòng khi xóa dữ liệu duyệt web.
- Không đổi tên miền (ví dụ sang tên miền riêng) mà chưa xuất sao lưu, vì dữ liệu gắn với tên miền.
