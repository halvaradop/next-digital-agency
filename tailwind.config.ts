import type { Config } from "tailwindcss"

export default {
    content: [
        "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@halvaradop/ui-*/**/*.{js}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
} satisfies Config
