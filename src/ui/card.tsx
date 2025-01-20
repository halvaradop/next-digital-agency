import { merge } from "@/lib/utils"
import { IconSquare } from "@/ui/icon"
import { Button } from "@halvaradop/ui-button"
import { CardProps } from "@/lib/@types/props"

export const Card = ({ className, classNameButton, title, description, button, src, alt }: CardProps) => {
    return (
        <article className={merge("py-10 px-4 sm:py-11 sm:px-5 md:py-12 md:px-6 base:px-7", className)}>
            {src && alt && (
                <figure className="grid grid-cols-[auto_1fr] items-center gap-x-5">
                    <IconSquare src={src} alt={alt} />
                    <h2 className="text-white text-2xl font-bold">{title}</h2>
                </figure>
            )}
            {!src && <h2 className="text-white text-2xl font-bold">{title}</h2>}
            <p className="mt-4 text-grey">{description}</p>
            {button && (
                <Button className={merge("h-auto mt-8 py-2 border-grey-600 bg-grey-600", classNameButton)}>{button}</Button>
            )}
        </article>
    )
}
