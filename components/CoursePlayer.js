'use client';
import { useState } from 'react';

export default function CoursePlayer({ course }) {
  const [active, setActive] = useState(0);
  const lesson = course.lessons[active];
  const style = { '--c1': course.c1, '--c2': course.c2 };

  function select(i) {
    setActive(i);
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'play_lesson', {
        course: course.name,
        lesson: `${course.lessons[i].no} · ${course.lessons[i].title}`,
      });
    }
    // cuộn lên khu xem cho rõ ràng trên mobile
    if (typeof document !== 'undefined') {
      document.getElementById('player-top')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <main className="wrap" style={style}>
      <div className="crumb">
        <a href="/">Trang chủ</a> <span>/</span> <span>{course.num} · {course.name}</span>
      </div>

      <div className="course-head" id="player-top">
        <span className="badge">{course.num}</span>
        <h1>{course.name}</h1>
        <p>{course.desc}</p>
      </div>

      <div className="layout">
        <div className="player-col">
          <div className="player">
            <iframe
              key={lesson.videoId}
              src={`https://www.youtube.com/embed/${lesson.videoId}?rel=0&modestbranding=1`}
              title={lesson.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="now">
            <div className="no">{lesson.no}</div>
            <h2>{lesson.title}</h2>
          </div>
          <div className="navbtns">
            <button onClick={() => select(active - 1)} disabled={active === 0}>← Bài trước</button>
            <button onClick={() => select(active + 1)} disabled={active === course.lessons.length - 1}>Bài tiếp →</button>
          </div>
        </div>

        <aside className="playlist">
          <div className="ph">Nội dung khóa học <span>{course.lessons.length} bài</span></div>
          <div className="scroll">
            {course.lessons.map((l, i) => (
              <button
                key={i}
                className={`litem${i === active ? ' active' : ''}`}
                onClick={() => select(i)}
              >
                <span className="n">{i === active ? '▶' : i + 1}</span>
                <span className="lt"><small>{l.no}</small>{l.title}</span>
              </button>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}
