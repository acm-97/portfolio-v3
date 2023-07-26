/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: ["app/components/IconComponents/loader.jsx"]
  },
  env: {
    SITE_URL: process.env.SITE_URL,
    GIT_TOKEN: process.env.GIT_TOKEN,
    GMAIL: process.env.GMAIL,
    CRAI: process.env.CRAI,
    DOFLEINI: process.env.DOFLEINI,
    LINKEDIN: process.env.LINKEDIN,
    INSTAGRAM: process.env.INSTAGRAM,
    GITHUB: process.env.GITHUB,
    TWITER: process.env.TWITER,
  },
};

module.exports = nextConfig;
