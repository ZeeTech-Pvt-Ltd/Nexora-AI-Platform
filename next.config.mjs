/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // legacy slugs redirect to the new ones
      { source: '/product', destination: '/how-it-works', permanent: true },
      { source: '/why', destination: '/why-invest', permanent: true },
    ];
  },
};

export default nextConfig;
