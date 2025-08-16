/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: "export",
  // distDir: 'out',
  // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://NovaNestVenture.com' : '',
  images: {
    domains: [
      'res.cloudinary.com',
      'panel-back.NovaNestVenture.com',
      'panel.NovaNestVenture.com',
      'NovaNestVenture.com',
      'localhost',
      "landa-back.NovaNestVenture.com"
    ]
  }
};

module.exports = nextConfig;
