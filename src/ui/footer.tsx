import Link from "next/link"
import Image from "next/image"
import { IconSquare } from "./services/icon"
import { footer } from "@/lib/images"

export const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="w-11/12 mx-auto my-5 space-y-5 lg:my-14">
            <figure className="py-10 flex items-center justify-center gap-x-2 border-b border-grey-600">
                <Image src={footer.logo} alt="SquareUp Icon" priority />
                <figcaption className="text-white text-lg font-semibold tracking-wide">SquareUp</figcaption>
            </figure>
            <ul className="py-10 text-grey font-medium flex items-center justify-center flex-wrap gap-5 sm:gap-x-6 md:gap-x-7 base:gap-x-9">
                <li>
                    <Link href="/home">Home</Link>
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
            <div className="py-4 px-3 flex flex-col border border-grey-600 rounded-lg">
                <h3 className="text-grey font-medium text-center">Stay Connected</h3>
                <figure className="mt-4 flex items-center justify-center gap-x-2">
                    <IconSquare src={footer.facebook} alt="Facebook Icon" />
                    <IconSquare src={footer.twitter} alt="Twitter Icon" />
                    <IconSquare src={footer.linkedin} alt="Linkedin Icon" />
                </figure>
            </div>
            <ul className="text-grey font-medium flex items-center flex-col">
                <li className="w-full py-5 flex items-center justify-center gap-x-2 border-b border-grey-600">
                    <Image src={footer.email} alt="Email Icon" />
                    <p>hello@squareup.com</p>
                </li>
                <li className="w-full py-5 flex items-center justify-center gap-x-2 border-b border-grey-600">
                    <Image src={footer.phone} alt="Phone Icon" />
                    <p>+91 91813 23 2309</p>
                </li>
                <li className="w-full py-5 flex items-center justify-center gap-x-2 border-b border-grey-600">
                    <Image src={footer.location} alt="Location Icon" />
                    <p>Somewhere in the World</p>
                </li>
                <li className="w-full py-5 text-grey-100 text-center">© {year} SquareUp. All rights reserved.</li>
            </ul>
        </footer>
    )
}
