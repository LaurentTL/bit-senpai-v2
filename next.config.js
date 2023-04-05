/** @type {import('next').NextConfig} */

const withVideos = require('next-videos');

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack(config) {
        config.resolve.fallback = { util: require.resolve('util/') };
        config.module.rules.push({
            test: /\.(mp4|webm|mov|ogg|swf|ogv)$/,
            type: 'asset/resource',
        });
        return config;
    },
    images: {
        dangerouslyAllowSVG: true,
        contentSecurityPolicy:
            "default-src 'self'; script-src 'none'; sandbox;",
        domains: ['assets.coingecko.com'],
    },
};

module.exports = withVideos();
module.exports = nextConfig;
