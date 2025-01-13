import { Geist } from "next/font/google"
import { LayoutProps } from "@/lib/@types/props"
import "@/ui/globals.css"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} antialiased`}>{children}</body>
        </html>
    )
}
