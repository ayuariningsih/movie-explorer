/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN
  }
}

module.exports = nextConfig
