/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    experimental: {
        appDir: true, // Ensure it's set for Next.js 14+
    }
};

export default nextConfig;
