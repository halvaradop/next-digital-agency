import Image from "next/image"
import { Box } from "@/ui/common/box"
import { companies } from "@/lib/content/home"

export const BrandCompanies = () => {
    return (
        <Box
            className="grid grid-cols-2 items-center justify-items-center relative bg-[#242424] bg-opacity-20 base:grid-cols-6"
            border="horizontal"
            asChild
        >
            <div>
                <figure className="w-full py-10 grid place-content-center border-r border-b border-grey-600 base:py-12 base:border-0">
                    <Image src={companies.zapier} alt="Zapier Icon" priority />
                </figure>
                <figure className="w-full py-10 grid place-content-center border-b border-grey-600 base:py-12 base:border-0">
                    <Image src={companies.spotify} alt="Spotify Icon" priority />
                </figure>
                <figure className="w-full py-10 grid place-content-center border-r border-b border-grey-600 base:py-12 base:border-0">
                    <Image src={companies.zoom} alt="Zoom Icon" priority />
                </figure>
                <figure className="w-full py-10 grid place-content-center base:py-12">
                    <Image src={companies.slack} alt="Slack Icon" priority />
                </figure>
                <figure className="w-full py-10 grid place-content-center base:py-12">
                    <Image src={companies.amazon} alt="Amazon Icon" priority />
                </figure>
                <figure className="w-full py-10 grid place-content-center border-l border-t border-grey-600 base:py-12 base:border-0">
                    <Image src={companies.adobe} alt="Adobe Icon" priority />
                </figure>
                <Box className="w-fit mx-auto py-3 px-4 text-green block absolute -top-6 rounded-full bg-grey-700" asChild>
                    <span>Trusted By 250+ Companies</span>
                </Box>
            </div>
        </Box>
    )
}
