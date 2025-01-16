import { Barlow } from "next/font/google"
import { ChildrenProps } from "@/lib/@types/props"
import { Header } from "@/ui/header"
import { Footer } from "@/ui/footer"
import { Box } from "@/ui/box"
import "@/ui/globals.css"

const barlow = Barlow({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-geist-sans",
})

export default function RootLayout({ children }: ChildrenProps) {
    return (
        <html lang="en">
            <body
                className={`${barlow.variable} min-h-dvh grid grid-rows-[auto_1fr_auto] antialiased bg-grey-700 scroll:w-2 track:my-2 thumb:rounded-full thumb:bg-grey-600`}
            >
                <Header />
                <Box border="vertical">{children}</Box>
                <Footer />
            </body>
        </html>
    )
}
