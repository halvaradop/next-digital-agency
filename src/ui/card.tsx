import { CardProps } from "@/lib/@types/props"
import { Button } from "@halvaradop/ui-button"
import { merge } from "@/lib/utils"
import { IconSquare } from "./icon"

export const Card = ({ className, title, description, button, src, alt }: CardProps) => {
    return (
        <article
            className={merge(
                "py-10 px-4 border border-b-0 border-grey-600 sm:py-11 sm:px-5 md:py-12 md:px-6 base:py-14 base:px-7",
                className,
            )}
        >
            {src && alt && (
                <figure className="flex items-center gap-x-5">
                    <IconSquare src={src} alt={alt} />
                    <h2 className="text-white text-2xl font-bold">{title}</h2>
                </figure>
            )}
            {!src && <h2 className="text-white text-2xl font-bold">{title}</h2>}
            <p className="mt-4 text-grey">{description}</p>
            {button && <Button className="h-auto mt-8 py-2 border-grey-600 bg-grey-600">{button}</Button>}
        </article>
    )
}
