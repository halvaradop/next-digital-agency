import Image from "next/image"
import logoIcon from "@/assets/services/logo.svg"
import { CallToActionProps } from "@/lib/@types/props"
import { Button } from "@halvaradop/ui-button"

export const CallToAction = ({ title, description, button }: CallToActionProps) => {
    return (
        <div className="py-16 px-[5%] text-center flex items-center flex-col gap-y-4 border border-b-0 border-grey-600 sm:py-20 md:py-24 base:py-28">
            <Image src={logoIcon} alt="SquareUp Icon" />
            <h3 className="text-white text-2xl font-semibold">{title}</h3>
            <p className="text-grey text-sm">{description}</p>
            <Button className="text-black border-green-700 bg-green-700">{button}</Button>
        </div>
    )
}