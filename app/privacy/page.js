export const metadata = {
  title: 'Chính sách bảo mật — Security Academy',
  description: 'Chính sách bảo mật của website Security Academy.',
};

const SECTIONS = [
  ['1. Giới thiệu', 'Security Academy là website giáo dục chia sẻ các khóa học an ninh mạng miễn phí bằng tiếng Việt. Trang web không yêu cầu đăng ký tài khoản và không thu thập thông tin cá nhân nhạy cảm của người dùng.'],
  ['2. Thông tin chúng tôi thu thập', 'Chúng tôi dùng Google Analytics để thống kê ẩn danh lượt truy cập (số người xem, thời gian xem, trang được xem, khu vực chung). Dữ liệu ở dạng tổng hợp, không nhận dạng cá nhân bạn, và không được bán hay chia sẻ cho bên thứ ba vì mục đích thương mại.'],
  ['3. Nội dung nhúng từ bên thứ ba', 'Video khóa học được nhúng từ YouTube. Khi bạn xem video, YouTube (Google) có thể đặt cookie và thu thập dữ liệu theo chính sách riêng của họ.'],
  ['4. Cookie', 'Website có thể dùng cookie cho mục đích thống kê và trải nghiệm xem video. Bạn có thể tắt cookie trong trình duyệt; một số tính năng có thể bị ảnh hưởng.'],
  ['5. Quyền của bạn', 'Bạn có thể dùng công cụ chặn của trình duyệt để ngừng theo dõi. Vì chúng tôi không lưu dữ liệu định danh, không có hồ sơ cá nhân nào gắn với bạn để xóa.'],
  ['6. Liên hệ', 'Nếu có thắc mắc, vui lòng liên hệ qua kênh được công bố trên trang chủ của website.'],
];

export default function Privacy() {
  return (
    <main className="wrap pb-14">
      <div className="flex items-center gap-2 pt-5 text-sm text-dim">
        <a href="/" className="hover:text-ink">Trang chủ</a><span>/</span><span>Chính sách bảo mật</span>
      </div>
      <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">Chính sách bảo mật</h1>
      <p className="mb-6 mt-1 text-sm text-dim2">Cập nhật lần cuối: 15/11/2026</p>
      <div className="max-w-3xl space-y-6">
        {SECTIONS.map(([h, p]) => (
          <section key={h}>
            <h2 className="mb-1.5 text-xl font-bold">{h}</h2>
            <p className="leading-relaxed text-dim">{p}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
