/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/admin/:path*',
        destination: '/admin/:path*',
      },
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
      {
        source: '/admin/',
        destination: '/admin/index.html',
      },
    ];
  },
};

export default nextConfig;
