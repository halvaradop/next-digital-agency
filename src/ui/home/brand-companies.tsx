import Image from "next/image"
import { companies } from "@/lib/images"

export const BrandCompanies = () => {
    return (
        <div className="grid grid-cols-2 items-center justify-items-center relative border border-grey-600 bg-[#242424] bg-opacity-20">
            <figure className="w-full py-8 grid place-content-center border-r border-b border-grey-600">
                <Image src={companies.zapier} alt="Zapier Icon" priority />
            </figure>
            <figure className="w-full py-8 grid place-content-center border-b border-grey-600">
                <Image src={companies.spotify} alt="Spotify Icon" priority />
            </figure>
            <figure className="w-full py-8 grid place-content-center border-r border-b border-grey-600">
                <Image src={companies.zoom} alt="Zoom Icon" priority />
            </figure>
            <figure className="w-full py-8 grid place-content-center">
                <Image src={companies.slack} alt="Slack Icon" priority />
            </figure>
            <figure className="w-full py-8 grid place-content-center">
                <Image src={companies.amazon} alt="Amazon Icon" priority />
            </figure>
            <figure className="w-full py-8 grid place-content-center border-l border-t border-grey-600">
                <Image src={companies.adobe} alt="Adobe Icon" priority />
            </figure>
            <span className="w-fit mx-auto py-3 px-4 text-green block absolute -top-4 rounded-full border border-grey-600 bg-grey-700">
                Trusted By 250+ Companies
            </span>
        </div>
    )
}
