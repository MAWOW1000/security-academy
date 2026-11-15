'use client';
import { useState } from 'react';

export default function CoursePlayer({ course }) {
  const [active, setActive] = useState(0);
  const lesson = course.lessons[active];

  function select(i) {
    setActive(i);
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'play_lesson', {
        course: course.name,
        lesson: `${course.lessons[i].no} · ${course.lessons[i].title}`,
      });
    }
    if (typeof document !== 'undefined') {
      document.getElementById('player-top')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <main className="wrap" style={{ '--c1': course.c1, '--c2': course.c2 }}>
      <div className="flex items-center gap-2 pt-5 text-sm text-dim">
        <a href="/" className="hover:text-ink">Trang chủ</a><span>/</span>
        <span className="truncate">{course.num} · {course.name}</span>
      </div>

      <div id="player-top" className="scroll-mt-20 py-3 sm:py-5">
        <span className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-bg0 grad-bg">{course.num}</span>
        <h1 className="mt-3 text-2xl font-extrabold sm:text-3xl md:text-4xl">{course.name}</h1>
        <p className="mt-1.5 max-w-3xl text-dim">{course.desc}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 pb-14 lg:grid-cols-[1fr_360px]">
        {/* PLAYER */}
        <div className="min-w-0">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-edge bg-black shadow-2xl">
            <iframe
              key={lesson.videoId}
              src={`https://www.youtube.com/embed/${lesson.videoId}?rel=0&modestbranding=1&playsinline=1`}
              title={lesson.title}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="mt-4">
            <div className="text-sm font-bold tracking-wide grad-text">{lesson.no}</div>
            <h2 className="mt-0.5 text-xl font-bold sm:text-2xl">{lesson.title}</h2>
          </div>
          <div className="mt-4 flex gap-3">
            <button onClick={() => select(active - 1)} disabled={active === 0}
              className="tap flex-1 rounded-xl border border-edge bg-panel px-4 py-3 text-sm font-semibold hover:bg-panel2 disabled:opacity-40">
              ← Bài trước
            </button>
            <button onClick={() => select(active + 1)} disabled={active === course.lessons.length - 1}
              className="tap flex-1 rounded-xl border border-edge bg-panel px-4 py-3 text-sm font-semibold hover:bg-panel2 disabled:opacity-40">
              Bài tiếp →
            </button>
          </div>
        </div>

        {/* LESSON LIST */}
        <aside className="overflow-hidden rounded-2xl border border-edge bg-panel">
          <div className="flex items-center justify-between border-b border-edge px-4 py-3.5 text-[15px] font-bold">
            Nội dung khóa học <span className="text-[13px] font-medium text-dim2">{course.lessons.length} bài</span>
          </div>
          <div className="thin-scroll lg:max-h-[640px] lg:overflow-y-auto">
            {course.lessons.map((l, i) => {
              const on = i === active;
              return (
                <button key={i} onClick={() => select(i)}
                  className={`relative flex w-full items-center gap-3 border-b border-edge px-4 py-3 text-left last:border-0 ${on ? '' : 'hover:bg-panel2'}`}
                  style={on ? { background: 'color-mix(in srgb, var(--c1) 16%, #141d33)' } : undefined}>
                  {on && <span className="absolute left-0 h-11 w-1 rounded-r grad-bg" />}
                  <span className={`grid h-8 w-8 flex-none place-items-center rounded-lg text-[13px] font-bold ${on ? 'text-bg0 grad-bg' : 'border border-edge bg-bg0 text-dim'}`}>
                    {on ? '▶' : i + 1}
                  </span>
                  <span className="text-sm leading-snug">
                    <small className="mb-0.5 block text-xs text-dim2">{l.no}</small>{l.title}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>
      </div>
    </main>
  );
}
