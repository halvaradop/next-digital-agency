import { ProductList } from "@/ui/home/product-list"
import { Button } from "@halvaradop/ui-button"
import { frequentlyQuestions, homeChooseSquareUp, homeOurServices } from "@/lib/data"
import { BrandCompanies } from "@/ui/home/brand-companies"
import { OurClients } from "@/ui/home/our-clients"
import { Segment } from "@/ui/segment"
import { FrequentlyQuestion } from "@/ui/home/frequently-question"
import { CallToAction } from "@/ui/call-to-action"
import { Register } from "@/ui/home/register"

const Index = () => {
    return (
        <section className="w-11/12 mx-auto">
            <section className="min-h-[calc(100dvh-5rem+1px)] flex items-center justify-center flex-col">
                <div className="text-center">
                    <h1 className="text-white text-4xl font-semibold">A Digital Product Studio that will Work</h1>
                    <p className="w-full my-8 py-6 px-4 text-grey-100 border border-grey-600 rounded-lg bg-[#242424] bg-opacity-20">
                        For startups, enterprise leaders, media & publishers, and social good.
                    </p>
                </div>
                <div className="flex items-center gap-x-5">
                    <Button className="border-grey-700 bg-[#242424]">Our Works</Button>
                    <Button className="text-black border-green-700 bg-green-700">Contact Us</Button>
                </div>
            </section>
            <BrandCompanies />
            <ProductList
                title={homeOurServices.title}
                description={homeOurServices.description}
                products={homeOurServices.products}
            />
            <ProductList
                title={homeChooseSquareUp.title}
                description={homeChooseSquareUp.description}
                products={homeChooseSquareUp.products}
            />
            <OurClients />
            <section className="border-t border-grey-600">
                <Segment
                    title="Frequently Asked Questions"
                    description="Still you have any questions? Contact our Team via hello@squareup.com"
                />
                <section className="border-x border-grey-600">
                    {frequentlyQuestions.map(({ index, title }, key) => (
                        <FrequentlyQuestion key={key} index={index} title={title} />
                    ))}
                </section>
            </section>
            <CallToAction
                title="Thank you for your Interest in SquareUp."
                description="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
                button="Start Project"
            />
            <Register />
        </section>
    )
}

export default Index
