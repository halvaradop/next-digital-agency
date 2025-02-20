import { StaticImageData } from "next/image"

export interface ImageAttributes {
    src: StaticImageData | string
    alt: string
}

export interface Service extends ImageAttributes {
    title: string
}

export interface Descriptive {
    title: string
    description: string
}

export type BorderOptions = "vertical" | "horizontal" | "both" | "none"
