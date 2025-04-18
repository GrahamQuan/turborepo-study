/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@workspace/ui'],
};

if (process.env.NODE_ENV === 'production') {
  nextConfig.output = 'standalone';
}

export default nextConfig;
