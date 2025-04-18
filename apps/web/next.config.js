/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@workspace/ui'],
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};

if (process.env.NODE_ENV === 'production') {
  nextConfig.output = 'standalone';
}

export default nextConfig;
