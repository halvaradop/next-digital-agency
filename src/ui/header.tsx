"use client"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@halvaradop/ui-button"
import logoIcon from "@/assets/icons/common/logo.svg"

export const Header = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const matchMedia = window.matchMedia("(max-width: 900px)")

        const changeHandler = () => {
            setIsOpen(!matchMedia.matches)
        }

        changeHandler()
        matchMedia.addEventListener("change", changeHandler)
        return () => matchMedia.removeEventListener("change", changeHandler)
    }, [])

    return (
        <header data-open={isOpen}>
            <nav className="w-11/12 h-20 mx-auto flex items-center justify-between base:gap-x-10">
                <figure className="flex items-center gap-x-2">
                    <Image src={logoIcon} alt="logo icon" priority />
                    <figcaption className="text-white text-lg font-semibold tracking-wide">SquareUp</figcaption>
                </figure>
                <div
                    className="size-11 grid place-content-center relative z-20 space-y-1.5 rounded-md bg-grey-600 hover:cursor-pointer base:hidden"
                    onClick={handleToggle}
                >
                    <span className="w-7 h-0.5 block rounded bg-green-400" />
                    <span className="w-7 h-0.5 block rounded bg-green-400" />
                    <span className="w-6 h-0.5 ml-auto block rounded bg-green-400" />
                </div>
                <aside className="w-11/12 max-w-md aside-menu base:w-full base:max-w-none base:relative" data-open={isOpen}>
                    <ul className="h-full pt-28 px-6 flex items-center flex-col gap-y-4 text-white text-2xl font-medium bg-grey-600 base:h-auto base:p-0 base:flex-row base:justify-end base:gap-x-5 base:text-base base:bg-transparent">
                        <li className="hover:text-green-600 base:ml-auto base:hover:text-white" onClick={handleToggle}>
                            <Link className={`p-2 rounded-md ${pathname === "/" ? "link-active" : ""}`} href="/">
                                Home
                            </Link>
                        </li>
                        <li className="hover:text-green-600 base:hover:text-white" onClick={handleToggle}>
                            <Link className={`p-2 rounded-md ${pathname === "/services" ? "link-active" : ""}`} href="/services">
                                Services
                            </Link>
                        </li>
                        <li className="hover:text-green-600 base:hover:text-white" onClick={handleToggle}>
                            <Link className={`p-2 rounded-md ${pathname === "/works" ? "link-active" : ""}`} href="/works">
                                Works
                            </Link>
                        </li>
                        <li className="hover:text-green-600 base:hover:text-white" onClick={handleToggle}>
                            <Link className={`p-2 rounded-md ${pathname === "/process" ? "link-active" : ""}`} href="/process">
                                Process
                            </Link>
                        </li>
                        <li className="hover:text-green-600 base:hover:text-white" onClick={handleToggle}>
                            <Link className={`p-2 rounded-md ${pathname === "/about" ? "link-active" : ""}`} href="/about">
                                About
                            </Link>
                        </li>
                        <li className="hover:text-green-600 base:hover:text-white" onClick={handleToggle}>
                            <Link className={`p-2 rounded-md ${pathname === "/careers" ? "link-active" : ""}`} href="/careers">
                                Careers
                            </Link>
                        </li>
                        <Button className="text-black border-green-700 bg-green-700 base:ml-auto" asChild>
                            <Link href="/contacts" onClick={handleToggle}>
                                Contact Us
                            </Link>
                        </Button>
                    </ul>
                </aside>
            </nav>
        </header>
    )
}
