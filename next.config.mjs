/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',            // xuất web tĩnh để host miễn phí (GitHub Pages/Netlify)
  images: { unoptimized: true },
  trailingSlash: true,
};
export default nextConfig;
