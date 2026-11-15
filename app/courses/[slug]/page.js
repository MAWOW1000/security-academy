import { COURSES, getCourse } from '../../../lib/courses';
import CoursePlayer from '../../../components/CoursePlayer';

export function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const c = getCourse(params.slug);
  return c ? { title: `${c.num} · ${c.name} — Security Academy`, description: c.desc } : {};
}

export default function CoursePage({ params }) {
  const course = getCourse(params.slug);
  if (!course) return <main className="wrap"><p style={{ padding: 60 }}>Không tìm thấy khóa học.</p></main>;
  return <CoursePlayer course={course} />;
}
