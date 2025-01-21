import { merge } from "@/lib/utils"
import { Slot } from "@halvaradop/ui-core"
import { BoxProps } from "@/lib/@types/props"

export const Box = ({ className, children, border, asChild }: BoxProps) => {
    const SlotComponent = asChild ? Slot : "section"
    return (
        <SlotComponent
            className={merge(
                "border border-grey-600",
                {
                    "border-y-0": border === "horizontal",
                    "border-x-0": border === "vertical",
                    "border-0": border == "none",
                },
                className,
            )}
        >
            {children}
        </SlotComponent>
    )
}
