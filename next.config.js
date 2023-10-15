/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SITE_URL: process.env.SITE_URL,
    GIT_TOKEN: process.env.GIT_TOKEN,
    GMAIL: process.env.GMAIL,
    CRAI: process.env.CRAI,
    DOFLEINI: process.env.DOFLEINI,
    DOUBLE2: process.env.DOUBLE2,
    LINKEDIN: process.env.LINKEDIN,
    INSTAGRAM: process.env.INSTAGRAM,
    GITHUB: process.env.GITHUB,
    TWITER: process.env.TWITER,
  },
};

module.exports = nextConfig;
