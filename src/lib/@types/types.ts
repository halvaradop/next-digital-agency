import { StaticImageData } from "next/image"

export interface ImageAttributes {
    src: StaticImageData
    alt: string
}

export interface Service extends ImageAttributes {
    title: string
}

export interface Descriptive {
    title: string
    description: string
}
