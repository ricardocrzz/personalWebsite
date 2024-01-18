/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// next.config.js
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['mir-s3-cdn-cf.behance.net', 'content.linkedin.com', "www.online-tech-tips.com", "nbcsports.brightspotcdn.com"],
  },
};
