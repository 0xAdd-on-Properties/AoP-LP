/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@hexclave/next'],
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{ kebabCase member }}.js',
      skipDefaultConversion: true,
    },
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};

export default nextConfig;
