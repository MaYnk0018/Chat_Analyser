
/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  transpilePackages: ["lucide-react"],
  experimental: {
    optimizeCss: true,
  },
  typescript: {
    ignoreBuildErrors: true, // temporarily while debugging
  },
  output: 'standalone',
}

export default nextConfig;