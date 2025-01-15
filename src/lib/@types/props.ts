import { ImageAttributes, Service } from "./types"

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

export interface ServiceIncludesProps {
    title: string
    description: string
    button: string
    services: ServiceListProps[]
}

export interface ProductListProps {
    title: string
    description: string
    products: ProductProps[]
}

export interface ProductProps extends ImageAttributes {
    title: string
    description: string
    button?: string
}

export interface SegmentProps {
    title: string
    description: string
    className?: string
}

export type CardProps = {
    className?: string
    title: string
    description: string
    button?: string
} & (ImageAttributes | { src?: undefined; alt?: undefined })

export interface ClientSaysProps {
    title: string
    description: string
    avatar: ImageAttributes
    name: string
    job: string
}

export interface FrequentlyQuestionProps {
    index: number
    title: string
}

export interface CallToActionProps {
    title: string
    description: string
    button: string
}

export interface ListProps<T extends object> {
    items: T[]
    render: (item: T) => React.ReactNode
    className?: string
    classNameItem?: string
}
