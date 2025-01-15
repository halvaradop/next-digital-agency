import { ProductProps } from "@/lib/@types/props"
import { Button } from "@halvaradop/ui-button"
import Image from "next/image"

export const Product = ({ title, description, button, alt, src }: ProductProps) => {
    return (
        <article className="py-10 px-4 border border-b-0 border-grey-600 sm:py-11 sm:px-5 md:py-12 md:px-6 base:py-14 base:px-7">
            <figure>
                <Image src={src} alt={alt} />
                <h2 className="text-white text-2xl font-bold">{title}</h2>
            </figure>
            <p className="mt-4 mb-8 text-grey">{description}</p>
            {button && <Button className="h-auto py-2 border-grey-600 bg-grey-600">{button}</Button>}
        </article>
    )
}
