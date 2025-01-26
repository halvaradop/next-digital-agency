import { merge } from "@/lib/utils"
import { SegmentTitleProps } from "@/lib/@types/props"

export const SegmentTitle = ({ className, children }: SegmentTitleProps) => {
    return (
        <h2
            className={merge(
                "py-8 px-4 text-white text-4xl font-semibold border-b border-grey-600 sm:py-10 md:py-11 base:py-12 base:px-7",
                className,
            )}
        >
            {children}
        </h2>
    )
}
