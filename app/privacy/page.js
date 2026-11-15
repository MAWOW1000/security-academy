export const metadata = {
  title: 'Chính sách bảo mật — Security Academy',
  description: 'Chính sách bảo mật của website Security Academy.',
};

export default function Privacy() {
  return (
    <main className="wrap legal">
      <div className="crumb"><a href="/">Trang chủ</a> <span>/</span> <span>Chính sách bảo mật</span></div>
      <h1>Chính sách bảo mật</h1>
      <p className="updated">Cập nhật lần cuối: 15/11/2026</p>

      <h2>1. Giới thiệu</h2>
      <p>
        Security Academy là website giáo dục chia sẻ các khóa học an ninh mạng miễn phí bằng tiếng Việt.
        Trang web không yêu cầu đăng ký tài khoản và không thu thập thông tin cá nhân nhạy cảm của người dùng.
      </p>

      <h2>2. Thông tin chúng tôi thu thập</h2>
      <p>
        Chúng tôi sử dụng Google Analytics để thống kê ẩn danh lượt truy cập (số người xem, thời gian xem,
        trang được xem, khu vực chung). Dữ liệu này ở dạng tổng hợp, không nhận dạng cá nhân bạn.
        Chúng tôi không bán hay chia sẻ dữ liệu cho bên thứ ba vì mục đích thương mại.
      </p>

      <h2>3. Nội dung nhúng từ bên thứ ba</h2>
      <p>
        Video khóa học được nhúng từ YouTube. Khi bạn xem video, YouTube (Google) có thể đặt cookie và thu thập
        dữ liệu theo chính sách riêng của họ. Vui lòng tham khảo Chính sách bảo mật của Google để biết chi tiết.
      </p>

      <h2>4. Cookie</h2>
      <p>
        Website có thể dùng cookie cho mục đích thống kê (Google Analytics) và trải nghiệm xem video (YouTube).
        Bạn có thể tắt cookie trong trình duyệt; một số tính năng có thể bị ảnh hưởng.
      </p>

      <h2>5. Quyền của bạn</h2>
      <p>
        Bạn có thể yêu cầu ngừng theo dõi bằng cách dùng các công cụ chặn của trình duyệt. Vì chúng tôi không
        lưu dữ liệu định danh, không có hồ sơ cá nhân nào gắn với bạn để xóa.
      </p>

      <h2>6. Liên hệ</h2>
      <p>
        Nếu có thắc mắc về chính sách bảo mật, vui lòng liên hệ qua kênh được công bố trên trang chủ của website.
      </p>
    </main>
  );
}
