/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  // output: "export",
  // distDir: 'out',
  images: {
    domains: [
      // 'res.cloudinary.com',
      'panel-back.NovaNestVenture.com',
      'panel.NovaNestVenture.com',
      'NovaNestVenture.com',
      'localhost',
      "nova-back.NovaNestVenture.com"
    ],
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/static/:path*',
        destination: '/static/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
