/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    resolve: {
        fallback: {
            util: require.resolve('util/'),
        },
    },
    images: {
        dangerouslyAllowSVG: true,
        contentSecurityPolicy:
            "default-src 'self'; script-src 'none'; sandbox;",
        domains: ['assets.coingecko.com'],
    },
};

module.exports = nextConfig;
