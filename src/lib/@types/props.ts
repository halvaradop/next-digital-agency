import { Descriptive, ImageAttributes, Service } from "@/lib/@types/types"

export interface LayoutProps {
    children: React.ReactNode
}

export interface ServiceListProps {
    title: string
    services: Service[]
}

export interface IconSquareProps extends ImageAttributes {
    className?: string
}

export interface SegmentProps extends Descriptive {
    className?: string
}

export type CardProps = Descriptive & {
    className?: string
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

export interface CallToActionProps extends Descriptive {
    button: string
}

export interface ListProps<T extends object> {
    items: T[]
    render: (item: T) => React.ReactNode
    className?: string
    classNameItem?: string
}
