import { CardIndexProps } from "@/lib/@types/props"
import { merge } from "@halvaradop/ui-core"

export const CardIndex = ({ className, title, description, index }: CardIndexProps) => {
    return (
        <article className={merge("py-10 px-4 sm:py-11 sm:px-5 md:py-12 md:px-6 base:px-7", className)}>
            <div className="mb-4 flex items-center gap-x-5">
                <span className="text-green-400 text-[5rem] leading-none font-semibold">0{index}</span>
                <h2 className="w-full pl-4 p-6 text-grey-100 text-xl font-medium border-b border-grey-600">{title}</h2>
            </div>
            <p className="text-grey-100">{description}</p>
        </article>
    )
}
