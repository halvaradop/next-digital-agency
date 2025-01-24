import Image from "next/image"
import { Metadata } from "next"
import { Box } from "@/ui/common/box"
import { Card } from "@/ui/common/card"
import { List } from "@/ui/common/list"
import { Segment } from "@/ui/common/segment"
import { CardIndex } from "@/ui/common/card-index"
import { CallToActionStartProject } from "@/ui/common/call-to-action-start-project"
import { aboutList } from "@/lib/content/about"
import aboutImage from "@/assets/icons/about/about.svg"

const description =
    "Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation."

export const metadata: Metadata = {
    title: "About Us",
    description,
}

const About = () => {
    return (
        <Box className="w-11/12 mx-auto" border="horizontal">
            <Segment title="About Us" description={description} />
            <section className="pb-8 border-y border-grey-600 base:px-10 base:grid base:grid-cols-2 base:items-center base:justify-between lg:px-14">
                <Card
                    className="pb-0"
                    title="About SquareUp"
                    description="SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach."
                />
                <Image
                    className="w-full max-w-md mx-auto px-4 aspect-square sm:px-5 md:px-6 base:mr-0"
                    src={aboutImage}
                    alt="SquareUp Logo Icon"
                />
            </section>
            <section>
                <h2 className="py-8 px-4 text-white text-4xl font-semibold border-b border-grey-600 sm:py-10 md:py-11 base:py-12 base:px-7">
                    Our Story
                </h2>
                <List
                    className="base:grid base:grid-cols-2"
                    classNameItem="border-b border-grey-600 base:odd:border-r"
                    items={aboutList}
                    render={(item) => <CardIndex {...item} />}
                />
            </section>
            <CallToActionStartProject />
        </Box>
    )
}

export default About
