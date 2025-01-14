import Image from "next/image"
import { IconSquareProps } from "@/lib/@types/props"

export const IconSquare = ({ src, alt }: IconSquareProps) => {
    return (
        <figure className="size-14 grid place-content-center rounded-md bg-gradient-service">
            <Image src={src} width={24} alt={alt} priority />
        </figure>
    )
}
