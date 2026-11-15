import { COURSES } from '../lib/courses';

export default function Home() {
  const totalLessons = COURSES.reduce((s, c) => s + c.lessons.length, 0);
  return (
    <main className="wrap">
      <section className="hero">
        <div className="eyebrow">Khóa học miễn phí · Tiếng Việt</div>
        <h1>
          Học <span className="g">An Ninh Mạng</span>
          <br />từ nền tảng đến thực chiến
        </h1>
        <p>
          Lộ trình {COURSES.length} khóa, từ phần cứng và mạng đến kiểm thử xâm nhập, bảo mật thiết bị IoT và blockchain.
          Mọi bài giảng bằng tiếng Việt, học hoàn toàn miễn phí.
        </p>
        <div className="stats">
          <div className="stat"><b>{COURSES.length}</b><span>khóa học</span></div>
          <div className="stat"><b>{totalLessons}</b><span>bài giảng</span></div>
          <div className="stat"><b>100%</b><span>miễn phí</span></div>
        </div>
      </section>

      <h2 className="section-title" id="courses">Chọn một khóa để bắt đầu</h2>
      <div className="grid">
        {COURSES.map((c) => {
          const first = c.lessons[0]?.videoId;
          const thumb = first ? `https://img.youtube.com/vi/${first}/hqdefault.jpg` : '';
          return (
            <a
              key={c.slug}
              className="card"
              href={`/courses/${c.slug}/`}
              style={{ '--cc1': c.c1, '--cc2': c.c2 }}
            >
              <div className="topbar" />
              <div className="thumb">
                {thumb && <img src={thumb} alt={c.name} loading="lazy" />}
                <div className="play-pill">
                  <span className="dot">▶</span> {c.lessons.length} bài
                </div>
              </div>
              <div className="body">
                <span className="badge">{c.num}</span>
                <h3>{c.name}</h3>
                <p className="desc">{c.desc}</p>
                <div className="meta">
                  <span>{c.lessons.length} bài giảng</span>
                  <span className="go">Bắt đầu học →</span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </main>
  );
}
