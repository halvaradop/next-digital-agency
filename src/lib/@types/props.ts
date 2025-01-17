import { Descriptive, ImageAttributes, Service } from "@/lib/@types/types"
import { SlotProps } from "@halvaradop/ui-core"

export interface LayoutProps {
    children: React.ReactNode
}

export interface ClassNameProps {
    className?: string
}

export interface ChildrenProps {
    children: React.ReactNode
}

export interface ServiceListProps {
    title: string
    services: Service[]
}

export interface IconSquareProps extends ImageAttributes, ClassNameProps {}

export interface SegmentProps extends Descriptive, ClassNameProps {}

export type CardProps = Descriptive &
    ClassNameProps & {
        button?: string
    } & (ImageAttributes | { src?: undefined; alt?: undefined })

export interface ClientSaysProps extends Descriptive {
    avatar: ImageAttributes
    name: string
    job: string
}

export interface FrequentlyQuestionProps {
    index: number
    title: string
}

export interface CallToActionProps extends Descriptive, ClassNameProps {
    button: string
    border?: "vertical" | "horizontal" | "both" | "none"
}

export interface ListProps<T extends object> extends ClassNameProps {
    items: T[]
    render: (item: T) => React.ReactNode
    classNameItem?: string
}

export type BoxProps = ClassNameProps &
    ChildrenProps &
    SlotProps<"section"> & {
        border?: "vertical" | "horizontal" | "both" | "none"
    }

export interface WorkProps extends Descriptive, ClassNameProps {
    image: ImageAttributes
    link: string
}
