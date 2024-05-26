/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
}

module.exports = {

  // pageExtensions: ['js', 'jsx', 'page.js'],

  images: {
    domains: [
      'images.unsplash.com', 'openweathermap.org'
    ]
  }
}