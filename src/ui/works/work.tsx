import Link from "next/link"
import Image from "next/image"
import { merge } from "@halvaradop/ui-core"
import { WorkProps } from "@/lib/@types/props"
import { Button } from "@halvaradop/ui-button"
import arrow from "@/assets/icons/general/arrow.svg"

export const Work = ({ className, title, description, link, image }: WorkProps) => {
    return (
        <article
            className={merge("h-full py-6 px-4 flex flex-col gap-y-5 sm:py-8 sm:px-5 md:py-10 md:px-6 base:px-7", className)}
        >
            <Image className="w-full" src={image.src} alt={image.alt} />
            <div>
                <h3 className="text-grey font-medium text-lg">{title}</h3>
                <div className="grid items-end grid-cols-[1fr_auto] gap-x-3">
                    <Button className="text-sm text-grey-100 border-grey-600 bg-grey-600" asChild>
                        <Link href={link}>{link}</Link>
                    </Button>
                    <Link className="size-12 grid place-content-center rounded bg-grey-600" href={link}>
                        <Image className="size-8" src={arrow} alt="Arrow Icon" />
                    </Link>
                </div>
            </div>
            <p className="text-grey-100">{description}</p>
        </article>
    )
}
