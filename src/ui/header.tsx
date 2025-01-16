import Image from "next/image"
import logoIcon from "@/assets/services/logo.svg"

export const Header = () => {
    return (
        <header>
            <nav className="w-11/12 h-20 mx-auto flex items-center justify-between">
                <figure className="flex items-center gap-x-2">
                    <Image src={logoIcon} alt="logo icon" priority />
                    <figcaption className="text-white text-lg font-semibold tracking-wide">SquareUp</figcaption>
                </figure>
                <div className="size-11 grid place-content-center space-y-1 rounded-md bg-grey-600 hover:cursor-pointer">
                    <span className="w-8 h-0.5 block rounded bg-green-400" />
                    <span className="w-8 h-0.5 block rounded bg-green-400" />
                    <span className="w-6 h-0.5 ml-auto block rounded bg-green-400" />
                </div>
            </nav>
        </header>
    )
}
