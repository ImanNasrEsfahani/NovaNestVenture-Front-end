/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: "export",
  // distDir: 'out',
  // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://landaholding.com' : '',
  images: {
    domains: [
      'res.cloudinary.com',
      'panel-back.landaholding.com',
      'panel.landaholding.com',
      'landaholding.com',
      'localhost',
      "landa-back.landaholding.com"
    ]
  }
};

module.exports = nextConfig;
