import Image from "next/image"
import { Box } from "@/ui/box"
import { merge } from "@halvaradop/ui-core"
import { Button } from "@halvaradop/ui-button"
import { CallToActionProps } from "@/lib/@types/props"
import logoIcon from "@/assets/services/logo.svg"

export const CallToAction = ({ className, border, title, description, button }: CallToActionProps) => {
    return (
        <Box
            border={border}
            className={merge(
                "py-16 px-[5%] text-center flex items-center flex-col bg-segment bg-no-repeat bg-top gap-y-4 sm:py-20 md:py-24 base:py-28",
                className,
            )}
            asChild
        >
            <div>
                <Image src={logoIcon} alt="SquareUp Icon" />
                <h3 className="text-white text-2xl font-semibold">{title}</h3>
                <p className="text-grey text-sm">{description}</p>
                <Button className="text-black border-green-700 bg-green-700">{button}</Button>
            </div>
        </Box>
    )
}
