import { Barlow } from "next/font/google"
import { LayoutProps } from "@/lib/@types/props"
import { Header } from "@/ui/header"
import { Footer } from "@/ui/footer"
import "@/ui/globals.css"

const barlow = Barlow({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-geist-sans",
})

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="en">
            <body
                className={`${barlow.variable} min-h-dvh grid grid-rows-[auto_1fr_auto] antialiased bg-grey-700 scroll:w-2 track:my-2 thumb:rounded-full thumb:bg-grey-600`}
            >
                <Header />
                <main className="border-y border-grey-600">{children}</main>
                <Footer />
            </body>
        </html>
    )
}
