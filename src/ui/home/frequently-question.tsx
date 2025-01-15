import Image from "next/image"
import { FrequentlyQuestionProps } from "@/lib/@types/props"
import crossIcon from "@/assets/home/cross.svg"

export const FrequentlyQuestion = ({ index, title }: FrequentlyQuestionProps) => {
    return (
        <article className="py-6 px-4 border-t border-grey-600">
            <div className="grid items-center grid-cols-[auto_1fr_auto] gap-x-5">
                <span className="size-14 text-white font-semibold grid place-content-center rounded-md bg-gradient-service">
                    0{index}
                </span>
                <h3 className="w-fit text-white font-semibold">{title}</h3>
                <Image src={crossIcon} alt="Cross Icon" />
            </div>
        </article>
    )
}
