import type { Config } from 'tailwindcss'
const config: Config = {
    theme: {
        extend: {
            colors: {
                primary: "#0097A7",
                accent: "#F4B400",
                brand: {
                    DEFAULT: "#0097A7",
                    dark: "#007c8a",
                    yellow: "#F4B400",
                },
            },
        },
    },
    content: ["./src/**/*.{ts,tsx}"],
    plugins: [],
};

export default config;