import Image from "next/image"
import { Box } from "@/ui/box"
import { Card } from "@/ui/card"
import { List } from "@/ui/list"
import { aboutList } from "@/lib/data"
import { Segment } from "@/ui/segment"
import { CardIndex } from "@/ui/card-index"
import aboutImage from "@/assets/about/about.svg"
import logoIcon from "@/assets/services/logo.svg"
import { Button } from "@halvaradop/ui-button"
import { CallToActionStartProject } from "@/ui/call-to-action-start-project"

const About = () => {
    return (
        <Box className="w-11/12 mx-auto" border="horizontal">
            <Segment
                title="About Us"
                description="Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation."
            />
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
