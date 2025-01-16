import Link from "next/link"
import Image from "next/image"
import { Box } from "@/ui/box"
import { footer } from "@/lib/images"
import { IconSquare } from "@/ui/icon"

export const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="w-11/12 mx-auto mb-5 space-y-5 base:grid base:grid-cols-4 base:items-start base:justify-items-start base:gap-10 base:space-y-0">
            <figure className="py-10 flex items-center justify-center gap-x-2 border-b border-grey-600 base:w-full base:justify-start base:col-span-4">
                <Image src={footer.logo} alt="SquareUp Icon" priority />
                <figcaption className="text-white text-lg font-semibold tracking-wide">SquareUp</figcaption>
            </figure>
            <ul className="hidden text-grey-100 font-medium base:block">
                <li className="text-white text-lg font-semibold base:col-span-2">Address</li>
                <li>Somewhere in the World</li>
            </ul>
            <ul className="py-10 text-grey-100 font-medium flex items-center justify-center flex-wrap gap-5 sm:gap-x-6 md:gap-x-7 base:py-0 base:items-start base:flex-col">
                <li className="hidden text-white text-lg font-semibold base:block base:col-span-2">Catalog</li>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/services">Services</Link>
                </li>
                <li>
                    <Link href="/work">Work</Link>
                </li>
                <li>
                    <Link href="/process">Process</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/careers">Careers</Link>
                </li>
                <li>
                    <Link href="/contacts">Contacts</Link>
                </li>
            </ul>
            <Box
                className="py-4 px-3 flex flex-col rounded-lg base:w-fit base:p-0 base:items-center base:gap-0 base:order-1 base:border-none"
                asChild
            >
                <div>
                    <h3 className="text-grey font-medium text-center base:text-white base:text-lg">Stay Connected</h3>
                    <figure className="mt-4 flex items-center justify-center gap-x-2 base:m-0">
                        <IconSquare className="base:border-none base:bg-none" src={footer.facebook} alt="Facebook Icon" />
                        <IconSquare className="base:border-none base:bg-none" src={footer.twitter} alt="Twitter Icon" />
                        <IconSquare className="base:border-none base:bg-none" src={footer.linkedin} alt="Linkedin Icon" />
                    </figure>
                </div>
            </Box>
            <ul className="text-grey-100 font-medium flex items-center flex-col base:justify-start base:self-start base:gap-y-5">
                <li className="w-full hidden text-white text-lg font-semibold base:block">Contact Us</li>
                <li className="w-full py-5 flex items-center justify-center gap-x-2 border-b border-grey-600 base:py-0 base:justify-start base:border-b-0">
                    <Image className="base:hidden" src={footer.email} alt="Email Icon" />
                    <p>hello@squareup.com</p>
                </li>
                <li className="w-full py-5 flex items-center justify-center gap-x-2 border-b border-grey-600 base:py-0 base:justify-start base:border-b-0">
                    <Image className="base:hidden" src={footer.phone} alt="Phone Icon" />
                    <p>+91 91813 23 2309</p>
                </li>
                <li className="w-full py-5 flex items-center justify-center gap-x-2 border-b border-grey-600 base:hidden">
                    <Image src={footer.location} alt="Location Icon" />
                    <p>Somewhere in the World</p>
                </li>
            </ul>
            <span className="w-full pb-5 block text-grey-100 text-center base:pb-0 base:pt-5 base:col-span-4 base:order-last base:border-t base:border-grey-600">
                © {year} SquareUp. All rights reserved.
            </span>
        </footer>
    )
}
