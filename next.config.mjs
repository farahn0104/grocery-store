/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        turbo: {
            rules: {
                '*.svg': {
                    loaders: ['@svgr/webpack'],
                    as: '*.js',
                },
            },
        },
    },
    typescript: {
        ignoreBuildErrors: false,
    },
    eslint: {
        ignoreDuringBuilds: false,
    },
    images: {
        domains: ['http://localhost:3000/product/123'], // apne domains add karo
    },
}

export default nextConfig