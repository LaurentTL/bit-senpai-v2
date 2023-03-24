const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        // Ensure these match with .storybook/preview.js
        screens: {
            xs: '375px',
            sm: '600px',
            md: '900px',
            lg: '1200px',
            xl: '1536px',
        },
        fontFamily: {
            sans: ['Arial', 'sans-serif'],
            serif: ['Garamond', 'serif'],
        },
        color: {
            backblack: '#141415',
            gold: '#F4BE7E',
            backlightgray: '#F1F5FE',
            blurple: '#DFE1F1',
            secondarytext: '#ADB0B8',
            tertiraytext: '#6E727A',
            placeholdertext: '#6E727A',
            error: '#E54949',
            success: '#1FC090',
            chipsprimary: '#3D3123',
            primarytext: '#FFFFFF',
        },
        extend: {
            // custom user configuration
            bgGradientDeg: {
                75: '75deg',
            },
            gradientColorStops: {
                skin: {
                    first: 'var(--gradient-first)',
                    second: 'var(--gradient-second)',
                    third: 'var(--gradient-third)',
                },
            },
            animation: {
                tilt: 'tilt 10s infinite linear',
            },
            keyframes: {
                tilt: {
                    '0%, 50%, 100%': {
                        transform: 'rotate(0deg)',
                    },
                    '25%': {
                        transform: 'rotate(0.5deg)',
                    },
                    '75%': {
                        transform: 'rotate(-0.5deg)',
                    },
                },
            },
            colors: {
                blue: {
                    500: '#1a73e8',
                },
            },
            spacing: {
                128: '32rem',
            },
        },
    },
    plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'bg-gradient': (angle) => ({
                        'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
                    }),
                },
                {
                    values: Object.assign(theme('bgGradientDeg', {}), {
                        10: '10deg',
                        15: '15deg',
                        20: '20deg',
                        25: '25deg',
                        30: '30deg',
                        45: '45deg',
                        60: '60deg',
                        90: '90deg',
                        120: '120deg',
                        135: '135deg',
                    }),
                }
            );
        }),
    ],
};
