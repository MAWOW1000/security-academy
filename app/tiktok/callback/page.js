'use client';
import { useEffect, useState } from 'react';

export default function TikTokCallback() {
  const [code, setCode] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const c = new URLSearchParams(window.location.search).get('code') || '';
      setCode(c);
    } catch {}
  }, []);

  function copy() {
    try {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  }

  return (
    <main className="wrap flex min-h-[70vh] flex-col items-center justify-center py-16 text-center">
      <div className="w-full max-w-lg card-surface p-7">
        <h1 className="text-2xl font-extrabold">TikTok — Mã xác thực</h1>
        {code ? (
          <>
            <p className="mt-2 text-dim">Copy mã dưới đây, dán vào terminal (lệnh <code>--auth</code>):</p>
            <div className="mt-4 break-all rounded-xl border border-edge bg-bg0 p-4 font-mono text-sm">{code}</div>
            <button onClick={copy}
              className="tap mt-4 rounded-xl px-5 py-3 text-sm font-bold text-bg0 grad-bg">
              {copied ? 'Đã copy ✓' : 'Copy mã'}
            </button>
          </>
        ) : (
          <p className="mt-3 text-dim">Không tìm thấy mã trong URL. Hãy bắt đầu lại từ lệnh <code>--auth</code>.</p>
        )}
        <p className="mt-6 text-xs text-dim2">Trang này chỉ dùng cho quá trình đăng nhập TikTok Developer.</p>
      </div>
    </main>
  );
}
