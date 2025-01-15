import { SegmentProps } from "@/lib/@types/props"
import { merge } from "@/lib/utils"

export const Segment = ({ className, title, description }: SegmentProps) => {
    return (
        <div
            className={merge(
                "py-16 px-4 text-center border border-y-0 border-grey-600 sm:py-20 sm:px-5 md:py-24 md:px-6 base:py-28 base:px-7",
                className,
            )}
        >
            <h1 className="text-white text-3xl font-bold">{title}</h1>
            <p className="mt-4 text-grey">{description}</p>
        </div>
    )
}
