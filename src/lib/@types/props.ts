import { BorderOptions, Descriptive, ImageAttributes, Service } from "@/lib/@types/types"
import { SlotProps } from "@halvaradop/ui-core"

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

export type CardProps = (Descriptive & ClassNameProps & { button?: string; classNameButton?: string }) &
    (ImageAttributes | { src?: undefined; alt?: undefined })

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
    border?: BorderOptions
}

export interface ListProps<T extends object> extends ClassNameProps {
    items: T[]
    render: (item: T) => React.ReactNode
    classNameItem?: string
}

export type BoxProps = ClassNameProps &
    ChildrenProps &
    SlotProps<"section"> & {
        border?: BorderOptions
    }

export interface WorkProps extends Descriptive, ClassNameProps {
    image: ImageAttributes
    link: string
}

export interface CardIndexProps extends Descriptive, ClassNameProps {
    index?: number
    classNameTitle?: string
}

export interface RegisterProps extends ClassNameProps {
    classNameForm?: string
}

export interface SegmentTitleProps extends ClassNameProps, ChildrenProps {}
