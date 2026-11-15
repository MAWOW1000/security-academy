import { COURSES } from '../lib/courses';

export default function Home() {
  const totalLessons = COURSES.reduce((s, c) => s + c.lessons.length, 0);
  return (
    <main className="wrap">
      {/* HERO */}
      <section className="py-12 text-center sm:py-16">
        <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-brand">
          <span className="h-[3px] w-6 rounded grad-bg" />
          Khóa học miễn phí · Tiếng Việt
          <span className="h-[3px] w-6 rounded grad-bg" />
        </div>
        <h1 className="mt-4 text-balance text-4xl font-extrabold leading-[1.1] sm:text-5xl md:text-6xl">
          Học <span className="grad-text">An Ninh Mạng</span>
          <br className="hidden sm:block" /> <span className="sm:hidden"> </span>từ nền tảng đến thực chiến
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-dim sm:text-lg">
          Lộ trình {COURSES.length} khóa, từ phần cứng và mạng đến kiểm thử xâm nhập, bảo mật thiết bị IoT và blockchain.
          Mọi bài giảng bằng tiếng Việt, học hoàn toàn miễn phí.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-6 sm:gap-8">
          {[[COURSES.length, 'khóa học'], [totalLessons, 'bài giảng'], ['100%', 'miễn phí']].map(([n, l]) => (
            <div key={l} className="text-center">
              <b className="block font-display text-2xl tabular-nums sm:text-3xl">{n}</b>
              <span className="text-xs text-dim2">{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* COURSE GRID */}
      <h2 id="courses" className="mb-5 flex items-center gap-3 text-xl font-bold sm:text-2xl">
        <span className="h-6 w-[5px] rounded grad-bg" /> Chọn một khóa để bắt đầu
      </h2>
      <div className="grid grid-cols-1 gap-5 pb-14 sm:grid-cols-2 lg:grid-cols-3">
        {COURSES.map((c) => {
          const first = c.lessons[0]?.videoId;
          const thumb = first ? `https://img.youtube.com/vi/${first}/hqdefault.jpg` : '';
          return (
            <a
              key={c.slug}
              href={`/courses/${c.slug}/`}
              className="tap group flex flex-col overflow-hidden rounded-2xl border border-edge bg-panel transition hover:-translate-y-1 hover:shadow-2xl"
              style={{ '--c1': c.c1, '--c2': c.c2 }}
            >
              <div className="h-1.5 grad-bg" />
              <div className="relative aspect-video overflow-hidden bg-black">
                {thumb && <img src={thumb} alt={c.name} loading="lazy"
                  className="h-full w-full object-cover opacity-90 transition group-hover:scale-105" />}
                <div className="absolute inset-0 bg-gradient-to-t from-bg0/80 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 text-sm font-semibold">
                  <span className="grid h-8 w-8 place-items-center rounded-full text-bg0 grad-bg">▶</span>
                  {c.lessons.length} bài
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-2.5 p-5">
                <span className="self-start rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-bg0 grad-bg">{c.num}</span>
                <h3 className="font-display text-xl font-bold">{c.name}</h3>
                <p className="flex-1 text-[15px] leading-relaxed text-dim">{c.desc}</p>
                <div className="mt-1 flex items-center justify-between text-sm text-dim2">
                  <span>{c.lessons.length} bài giảng</span>
                  <span className="font-bold grad-text">Bắt đầu học →</span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </main>
  );
}
