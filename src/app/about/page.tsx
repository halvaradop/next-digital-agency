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
            <section className="py-10 px-4 text-grey-100 text-center sm:py-11 sm:px-5 md:py-12 md:px-6 base:px-7">
                <div className="base:flex base:items-center base:gap-x-5">
                    <Image className="size-16 mx-auto base:justify-self-start" src={logoIcon} alt="SquareUp Logo Icon" />
                    <div className="base:text-left">
                        <h3 className="my-5 text-2xl font-semibold base:mt-0 base:mb-2 base:text-lg">
                            Today, SquareUp Continues to Thrive as a Leading Digital Product Agency.....
                        </h3>
                        <p className="text-sm">
                            Combining the power of design, engineering, and project management to create transformative digital
                            experiences. They invite you to join them on their journey and discover how they can help bring your
                            digital ideas to life.
                        </p>
                    </div>
                </div>
                <div className="mt-5 p-4 rounded-lg border border-grey-600 bg-[#242424] bg-opacity-20 base:mt-8 base:grid base:grid-cols-[auto_1fr_auto] base:items-center base:gap-x-5">
                    <h4 className="text-lg base:text-base">Welcome to SquareUp</h4>
                    <p className="my-4 p-4 text-white text-lg rounded-lg bg-grey-600 base:my-0 base:p-2 base:text-base">
                        Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.
                    </p>
                    <Button className="mx-auto text-black border-green-700 bg-green-700">Start Project</Button>
                </div>
            </section>
        </Box>
    )
}

export default About
