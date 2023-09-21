/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'kurt-next-ecommerce.s3.amazonaws.com',
      'png.pngtree.com',
    ],
  },
}

module.exports = nextConfig
