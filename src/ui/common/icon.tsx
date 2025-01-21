import Image from "next/image"
import { merge } from "@/lib/utils"
import { IconSquareProps } from "@/lib/@types/props"

export const IconSquare = ({ src, alt, className }: IconSquareProps) => {
    return (
        <figure className={merge("size-14 grid place-content-center rounded-md bg-gradient-service", className)}>
            <Image src={src} width={24} alt={alt} priority />
        </figure>
    )
}
