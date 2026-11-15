export const metadata = {
  title: 'Điều khoản sử dụng — Security Academy',
  description: 'Điều khoản sử dụng của website Security Academy.',
};

const SECTIONS = [
  ['1. Chấp nhận điều khoản', 'Khi truy cập và sử dụng Security Academy, bạn đồng ý với các điều khoản dưới đây. Nếu không đồng ý, vui lòng không sử dụng website.'],
  ['2. Mục đích giáo dục', 'Toàn bộ nội dung nhằm mục đích học tập và nâng cao nhận thức về an ninh mạng, được cung cấp miễn phí, "nguyên trạng", không kèm bảo đảm nào.'],
  ['3. Sử dụng hợp pháp', 'Bạn cam kết chỉ áp dụng kiến thức vào mục đích hợp pháp: trên hệ thống của chính bạn hoặc khi được chủ sở hữu cho phép bằng văn bản. Mọi hành vi tấn công hệ thống không được phép là vi phạm pháp luật và bạn tự chịu trách nhiệm. Security Academy không chịu trách nhiệm cho việc sử dụng sai mục đích.'],
  ['4. Sở hữu nội dung', 'Các bài giảng do Security Academy biên soạn. Bạn được xem và chia sẻ liên kết cho mục đích học tập, không được bán lại hay mạo danh.'],
  ['5. Liên kết bên thứ ba', 'Website nhúng video từ YouTube và có thể liên kết tới dịch vụ bên thứ ba. Chúng tôi không chịu trách nhiệm về nội dung hay chính sách của các bên đó.'],
  ['6. Thay đổi điều khoản', 'Chúng tôi có thể cập nhật điều khoản bất cứ lúc nào. Việc tiếp tục sử dụng website đồng nghĩa bạn chấp nhận các thay đổi.'],
  ['7. Liên hệ', 'Mọi câu hỏi xin liên hệ qua kênh công bố trên trang chủ.'],
];

export default function Terms() {
  return (
    <main className="wrap pb-14">
      <div className="flex items-center gap-2 pt-5 text-sm text-dim">
        <a href="/" className="hover:text-ink">Trang chủ</a><span>/</span><span>Điều khoản sử dụng</span>
      </div>
      <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">Điều khoản sử dụng</h1>
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
