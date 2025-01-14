import { StaticImageData } from "next/image"
import { Service } from "./types"

export interface LayoutProps {
    children: React.ReactNode
}

export interface ServiceListProps {
    title: string
    services: Service[]
}

export interface IconSquareProps {
    src: StaticImageData
    alt: string
}

export interface ServiceIncludesProps {
    title: string
    description: string
    button: string
    services: ServiceListProps[]
}
