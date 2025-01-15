import { StaticImageData } from "next/image"

export interface Service {
    title: string
    src: StaticImageData
    alt: string
}

export interface ImageAttributes {
    src: StaticImageData
    alt: string
}
