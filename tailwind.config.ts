import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"
import utilities from "@halvaradop/tailwindcss-utilities"

export default {
    content: [
        "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@halvaradop/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            screens: {
                base: "900px",
            },
            colors: {
                grey: {
                    DEFAULT: "#E6E6E6",
                    100: "#98989A",
                    200: "#656567",
                    300: "#59595A",
                    400: "#4C4C4D",
                    500: "#333333",
                    600: "#262626",
                    700: "#1A1A1A",
                },
                green: {
                    DEFAULT: "#FDFFFA",
                    100: "#F9FFF0",
                    200: "#F5FFE5",
                    300: "#ECFFCC",
                    400: "#D8FF99",
                    500: "#C5FF66",
                    600: "#B1FF33",
                    700: "#9EFF00",
                },
            },
            backgroundImage: {
                segment: "url(/assets/icons/segment.svg)",
                hero: "url(/assets/icons/abstract-design.svg)",
            },
            backgroundPosition: {
                hero: "center bottom",
            },
        },
        nth: {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
        },
    },
    plugins: [
        utilities,
        plugin(({ matchVariant, theme }) => {
            matchVariant("nth", (value) => `&:nth-child(${value})`, { values: theme("nth") })
            matchVariant("nth-last", (value) => `&:nth-last-child(${value})`, { values: theme("nth") })
        }),
    ],
} satisfies Config
