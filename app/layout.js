import './globals.css';

export const metadata = {
  title: 'Security Academy — Học An Ninh Mạng',
  description: 'Khóa học an ninh mạng tiếng Việt miễn phí: phần cứng, mạng, hệ điều hành, lập trình, kiểm thử xâm nhập và IoT.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&family=Space+Grotesk:wght@600;700&display=swap"
        />
        {/* GOOGLE ANALYTICS (GA4): thay G-XXXXXXXXXX bằng Measurement ID của bạn (xem README) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3RMQMDCFGB" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
                     gtag('js',new Date());gtag('config','G-3RMQMDCFGB');`,
          }}
        />
      </head>
      <body>
        <header className="header">
          <div className="wrap">
            <a className="logo" href="/">
              <span className="mark">S</span> Security Academy
            </a>
            <nav>
              <a href="/">Trang chủ</a>
              <a href="/#courses">Khóa học</a>
            </nav>
          </div>
        </header>
        {children}
        <footer>
          <div className="wrap">
            <div className="ethics">
              ⚠️ Nội dung chỉ dành cho mục đích học tập và kiểm thử hợp pháp. Chỉ thực hành trên hệ thống của
              chính bạn hoặc khi được cho phép bằng văn bản. Tấn công hệ thống không được phép là phạm pháp.
            </div>
            Security Academy · Chia sẻ kiến thức bảo mật cho cộng đồng · Học miễn phí, chia sẻ tự do.
            <div style={{ marginTop: 10 }}>
              <a href="/privacy/">Chính sách bảo mật</a> · <a href="/terms/">Điều khoản sử dụng</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
