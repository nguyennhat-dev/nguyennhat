# english://master

Ứng dụng học từ vựng tiếng Anh (chạy hoàn toàn trên trình duyệt, không cần máy chủ).

## Cách học: mỗi lần một nhóm
1. Chọn từ (thư viện theo cấp độ/chủ đề, hoặc bộ từ riêng) → chọn số từ → **Bắt đầu học nhóm**.
2. Nhóm được cố định. Flashcard, Luyện tập, Từ hay sai, Từ yêu thích đều chỉ dùng từ trong nhóm này.
3. Một từ được tính là *đã thuộc* khi đúng (hoặc bấm "Đã nhớ") 2 lần liên tiếp; sai thì đếm lại.
4. Khi mọi từ đã thuộc, nhóm hoàn thành và bạn chọn nhóm mới. Muốn thoát sớm thì bấm "Thoát nhóm" (có hỏi lại).

## Đưa lên GitHub Pages
1. Tạo repository mới trên GitHub (ví dụ `english-master`), để **Public**.
2. Tải **toàn bộ file và thư mục `icons/`** lên nhánh `main` (index.html, sw.js, manifest.json, vocab-extra.js, icons/).
   File `index.html` phải nằm ở thư mục gốc của repository.
3. Vào **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*, Branch = `main`, thư mục `/ (root)` → Save.
4. Chờ 1–2 phút, trang chạy tại `https://<tên-github>.github.io/english-master/`.

## Khi sửa code về sau
- Sửa `index.html` hoặc `vocab-extra.js` xong, **tăng số `VERSION` trong `sw.js`** (v4 → v5) để mọi thiết bị nhận bản mới.
- Dữ liệu học (XP, streak, từ hay sai, yêu thích, bộ từ riêng) lưu trong trình duyệt của từng thiết bị (localStorage).
  Mỗi thiết bị/trình duyệt có dữ liệu riêng. Dùng **Thống kê → Xuất sao lưu** để chuyển sang máy khác hoặc phòng khi xóa dữ liệu duyệt web.
- Không đổi tên miền (ví dụ sang tên miền riêng) mà chưa xuất sao lưu, vì dữ liệu gắn với tên miền.
