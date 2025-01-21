import { Box } from "@/ui/common/box"
import { List } from "@/ui/common/list"
import { Card } from "@/ui/common/card"
import { Segment } from "@/ui/common/segment"
import { Register } from "@/ui/home/register"
import { Button } from "@halvaradop/ui-button"
import { ClientSays } from "@/ui/home/client-says"
import { CallToAction } from "@/ui/common/call-to-action"
import { BrandCompanies } from "@/ui/home/brand-companies"
import { FrequentlyQuestion } from "@/ui/home/frequently-question"
import { frequentlyQuestions } from "@/lib/content/common"
import { homeChooseSquareUp, homeOurClientSays, homeOurServices } from "@/lib/content/home"

const Index = () => {
    return (
        <>
            <section className="w-11/12 min-h-[calc(100dvh-5rem+1px)] mx-auto flex items-center justify-center flex-col bg-hero bg-no-repeat base:border-x base:border-grey-600">
                <div className="text-center">
                    <h1 className="text-white text-4xl font-semibold">A Digital Product Studio that will Work</h1>
                    <Box className="w-full my-8 py-6 px-4 text-grey-100 rounded-lg space-x-2 bg-grey-700/50" asChild>
                        <p>
                            For <span className="base:p-2 base:rounded-lg base:bg-grey-600">startups</span>,
                            <span className="base:p-2 base:rounded-lg base:bg-grey-600">enterprise leaders</span>,
                            <span className="base:p-2 base:rounded-lg base:bg-grey-600">media & publishers</span> and
                            <span className="base:p-2 base:rounded-lg base:bg-grey-600">social good</span>.
                        </p>
                    </Box>
                </div>
                <div className="flex items-center gap-x-5">
                    <Button className="border-grey-600 bg-grey-700/80">Our Works</Button>
                    <Button className="text-black border-green-700 bg-green-700">Contact Us</Button>
                </div>
            </section>
            <section className="border-t border-grey-600">
                <div className="w-11/12 mx-auto">
                    <BrandCompanies />
                    <Box border="horizontal">
                        <Segment
                            className="border-b border-grey-600"
                            title="Our Services"
                            description="Transform your brand with our innovative digital solutions that captivate and engage your audience."
                        />
                        <List
                            className="lg:grid lg:grid-cols-3"
                            items={homeOurServices}
                            classNameItem="border-b border-grey-600 lg:border-r lg:last:border-r-0"
                            render={(item) => <Card className="lg:h-full lg:flex lg:justify-between lg:flex-col" {...item} />}
                        />
                    </Box>
                    <Box border="horizontal">
                        <Segment
                            title="Why Choose SquareUp?"
                            description="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
                        />
                        <List
                            className="base:grid base:grid-cols-2"
                            items={homeChooseSquareUp}
                            classNameItem="border-t border-grey-600 base:odd:border-r"
                            render={(item) => (
                                <Card className="base:h-full base:flex base:justify-between base:flex-col" {...item} />
                            )}
                        />
                    </Box>
                    <Box border="horizontal">
                        <Segment
                            className="border-t border-grey-600"
                            title="What our Clients say About us"
                            description="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us"
                        />
                        <List
                            className="base:grid base:grid-cols-2"
                            items={homeOurClientSays}
                            classNameItem="border-t border-grey-600 base:odd:border-r"
                            render={(item) => <ClientSays {...item} />}
                        />
                    </Box>
                    <Box border="horizontal">
                        <Segment
                            className="border-t border-grey-600"
                            title="Frequently Asked Questions"
                            description="Still you have any questions? Contact our Team via hello@squareup.com"
                        />
                        <List
                            className="base:grid base:grid-cols-2"
                            items={frequentlyQuestions}
                            classNameItem="group border-t border-grey-600 base:odd:border-r"
                            render={(item) => <FrequentlyQuestion {...item} />}
                        />
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
