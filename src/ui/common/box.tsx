import { merge } from "@/lib/utils"
import { Slot } from "@halvaradop/ui-core"
import { BoxProps } from "@/lib/@types/props"

export const Box = ({ className, children, border, asChild }: BoxProps) => {
    const SlotComponent = asChild ? Slot : "section"
    const cva: Record<NonNullable<BoxProps["border"]>, string> = {
        both: "border border-grey-600",
        horizontal: "border-x border-grey-600",
        vertical: "border-y border-grey-600",
        none: "",
    }
    return <SlotComponent className={merge(cva[border ?? "none"], className)}>{children}</SlotComponent>
}
