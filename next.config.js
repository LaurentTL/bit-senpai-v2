/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack(config) {
        config.resolve.fallback = { util: require.resolve('util/') };
        return config;
    },
    images: {
        dangerouslyAllowSVG: true,
        contentSecurityPolicy:
            "default-src 'self'; script-src 'none'; sandbox;",
        domains: ['assets.coingecko.com'],
    },
};

module.exports = nextConfig;
