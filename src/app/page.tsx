import { Box } from "@/ui/box"
import { List } from "@/ui/list"
import { Card } from "@/ui/card"
import { Segment } from "@/ui/segment"
import { Register } from "@/ui/home/register"
import { Button } from "@halvaradop/ui-button"
import { ClientSays } from "@/ui/home/client-says"
import { CallToAction } from "@/ui/call-to-action"
import { BrandCompanies } from "@/ui/home/brand-companies"
import { FrequentlyQuestion } from "@/ui/home/frequently-question"
import { frequentlyQuestions, homeChooseSquareUp, homeOurClientSays, homeOurServices } from "@/lib/data"

const Index = () => {
    return (
        <>
            <section className="w-11/12 min-h-[calc(100dvh-5rem+1px)] mx-auto flex items-center justify-center flex-col">
                <div className="text-center">
                    <h1 className="text-white text-4xl font-semibold">A Digital Product Studio that will Work</h1>
                    <Box className="w-full my-8 py-6 px-4 text-grey-100 rounded-lg bg-[#242424] bg-opacity-20" asChild>
                        <p>For startups, enterprise leaders, media & publishers, and social good.</p>
                    </Box>
                </div>
                <div className="flex items-center gap-x-5">
                    <Button className="border-grey-700 bg-[#242424]">Our Works</Button>
                    <Button className="text-black border-green-700 bg-green-700">Contact Us</Button>
                </div>
            </section>
            <section className="border-t border-grey-600">
                <div className="w-11/12 mx-auto">
                    <BrandCompanies />
                    <Box border="horizontal">
                        <Segment
                            title="Our Services"
                            description="Transform your brand with our innovative digital solutions that captivate and engage your audience."
                        />
                        <List
                            items={homeOurServices}
                            classNameItem="group"
                            render={(item) => <Card className="border-t border-grey-600 group-last:border-b" {...item} />}
                        />
                    </Box>
                    <Box border="horizontal">
                        <Segment
                            title="Why Choose SquareUp?"
                            description="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
                        />
                        <List
                            items={homeChooseSquareUp}
                            classNameItem="group"
                            render={(item) => <Card className="border-t border-grey-600 group-last:border-b" {...item} />}
                        />
                    </Box>
                    <Box border="horizontal">
                        <Segment
                            title="What our Clients say About us"
                            description="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us"
                        />
                        <List items={homeOurClientSays} classNameItem="group" render={(item) => <ClientSays {...item} />} />
                    </Box>
                    <Box border="horizontal">
                        <Segment
                            title="Frequently Asked Questions"
                            description="Still you have any questions? Contact our Team via hello@squareup.com"
                        />
                        <List items={frequentlyQuestions} render={(item) => <FrequentlyQuestion {...item} />} />
                    </Box>
                    <CallToAction
                        title="Thank you for your Interest in SquareUp."
                        description="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
                        button="Start Project"
                    />
                    <Register />
                </div>
            </section>
        </>
    )
}

export default Index
