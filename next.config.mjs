
/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  transpilePackages: ["lucide-react"],
  experimental: {
    optimizeCss: false,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
  typescript: {
    ignoreBuildErrors: true, // temporarily while debugging
  },
  output: 'standalone',
}

export default nextConfig;