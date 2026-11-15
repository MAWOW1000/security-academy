# Security Academy — website Next.js

Website khóa học bảo mật, dựng bằng **Next.js (App Router)**. Nhiều trang rõ ràng:

- `/` — trang chủ: hero + lưới 6 khóa học (có ảnh thumbnail, màu riêng từng khóa).
- `/courses/<slug>/` — trang khóa học: **khu xem video lớn** bên trái + danh sách bài bên phải;
  bấm bài nào phát đúng bài đó, có nút Bài trước / Bài tiếp.

## Chạy ở máy (xem thử)

```bash
cd ~/personal/Master-2026/security-academy
npm install
npm run dev
```
Mở http://localhost:3000

## Xuất web tĩnh để host MIỄN PHÍ

Project đã bật `output: 'export'`. Build ra thư mục `out/`:

```bash
npm run build
```

Sau đó đưa thư mục `out/` lên:
- **Netlify Drop**: https://app.netlify.com/drop → kéo thả thư mục `out`.
- **GitHub Pages**: push `out/` lên repo, bật Pages. (Hoặc dùng Vercel: `vercel` — tự nhận Next.js.)
- **Vercel** (khuyên dùng cho Next.js): cài `npm i -g vercel`, chạy `vercel`, làm theo hướng dẫn — có link ngay.

## Theo dõi người dùng (miễn phí)

### Số người vào web — Google Analytics 4
1. Tạo property tại https://analytics.google.com, lấy mã `G-XXXXXXXXXX`.
2. Mở `app/layout.js`, thay **2 chỗ** `G-XXXXXXXXXX` bằng mã của bạn.
3. Build và đăng lại. GA4 cho biết: số người dùng, thời gian ở lại, và các sự kiện:
   - `play_lesson` — ai bấm xem bài nào (biết bài/khoá phổ biến).

### Người xem video bao lâu — YouTube Studio
Vào **YouTube Studio → Analytics** (tự động, miễn phí): lượt xem, thời lượng xem trung bình,
tổng giờ xem, tỷ lệ giữ chân từng bài.

## Cập nhật nội dung
Dữ liệu khóa học ở `lib/courses.js` (tiêu đề, mô tả, màu, videoId từng bài). Sửa file đó rồi build lại.
