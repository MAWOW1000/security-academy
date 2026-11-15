import './globals.css';

export const metadata = {
  title: 'Security Academy — Học An Ninh Mạng',
  description: 'Khóa học an ninh mạng tiếng Việt miễn phí: phần cứng, mạng, hệ điều hành, lập trình, kiểm thử xâm nhập và IoT.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0a0f1e',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&family=Space+Grotesk:wght@600;700&display=swap"
        />
        {/* Google Analytics (GA4) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3RMQMDCFGB" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
                     gtag('js',new Date());gtag('config','G-3RMQMDCFGB');`,
          }}
        />
      </head>
      <body className="font-body antialiased">
        <header className="sticky top-0 z-50 border-b border-edge bg-bg0/80 backdrop-blur-md"
                style={{ paddingTop: 'env(safe-area-inset-top,0px)' }}>
          <div className="wrap flex h-14 items-center justify-between sm:h-16">
            <a href="/" className="flex items-center gap-2.5 font-display text-base font-bold sm:text-lg">
              <span className="grid h-8 w-8 place-items-center rounded-lg font-extrabold text-bg0"
                    style={{ background: 'linear-gradient(135deg,#38bdf8,#818cf8)' }}>S</span>
              <span className="whitespace-nowrap">Security Academy</span>
            </a>
            <nav className="flex items-center gap-1 text-sm font-semibold text-dim">
              <a href="/" className="hidden whitespace-nowrap rounded-lg px-3 py-2 hover:bg-panel hover:text-ink sm:inline-block">Trang chủ</a>
              <a href="/#courses" className="whitespace-nowrap rounded-lg px-3 py-2 hover:bg-panel hover:text-ink">Khóa học</a>
            </nav>
          </div>
        </header>

        {children}

        <footer className="mt-10 border-t border-edge"
                style={{ paddingBottom: 'calc(env(safe-area-inset-bottom,0px) + 40px)' }}>
          <div className="wrap py-7 text-center text-sm leading-relaxed text-dim">
            <div className="card-surface mx-auto mb-6 max-w-3xl px-5 py-4 text-left text-[13.5px] leading-relaxed text-dim">
              ⚠️ Nội dung chỉ dành cho mục đích học tập và kiểm thử hợp pháp. Chỉ thực hành trên hệ thống của
              chính bạn hoặc khi được cho phép bằng văn bản. Tấn công hệ thống không được phép là phạm pháp.
            </div>
            Security Academy · Chia sẻ kiến thức bảo mật cho cộng đồng · Học miễn phí, chia sẻ tự do.
            <div className="mt-2.5">
              <a href="/privacy/" className="text-brand hover:underline">Chính sách bảo mật</a>
              <span className="mx-1">·</span>
              <a href="/terms/" className="text-brand hover:underline">Điều khoản sử dụng</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
