import { Metadata } from "next"
import { Barlow } from "next/font/google"
import { ChildrenProps } from "@/lib/@types/props"
import { Header } from "@/ui/header"
import { Footer } from "@/ui/footer"
import { Box } from "@/ui/common/box"
import "@/ui/globals.css"

const barlow = Barlow({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-geist-sans",
})

const title = "SquareUp Digital Agency"
const description = "SquareUp is the key to creating a professional and impactful online presence for your agency"

export const metadata: Metadata = {
    title: {
        default: title,
        template: "%s | Digital Agency",
    },
    description,
    applicationName: title,
    authors: {
        name: "Hernan Alvarado <hernanvid123@gmail.com>",
        url: "https://github.com/halvaradop",
    },
    category: "website",
    classification: "website",
    creator: "Hernan Alvarado",
    keywords: ["SquareUp", "Digital Agency", "Produce UI", "Praha", "Figma Design", "Figma Template", "Nextjs", "Tailwindcss"],
    robots: "index, follow",
    metadataBase: new URL("https://next-digital-agency-five.vercel.app/"),
    publisher: "Vercel",
    openGraph: {
        title,
        description,
        type: "website",
        locale: "en_US",
        siteName: title,
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
    },
}

export default function RootLayout({ children }: ChildrenProps) {
    return (
        <html lang="en">
            <body
                className={`${barlow.variable} min-h-dvh grid grid-rows-[auto_1fr_auto] antialiased overflow-x-hidden bg-grey-700 scroll:w-2 track:my-2 thumb:rounded-full thumb:bg-grey-600`}
            >
                <Header />
                <Box border="vertical">{children}</Box>
                <Footer />
            </body>
        </html>
    )
}
