import { Box } from "@/ui/box"
import { Card } from "@/ui/card"
import { List } from "@/ui/list"
import { Work } from "@/ui/works/work"
import { Segment } from "@/ui/segment"
import { workList } from "@/lib/data"
import { CallToAction } from "@/ui/call-to-action"

const WorksPage = () => {
    return (
        <Box className="w-11/12 mx-auto" border="horizontal">
            <Segment
                title="Our Works"
                description="Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise."
            />
            <Card
                className="border border-grey-600"
                title="At SquareUp"
                description="We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success."
                button="Here are ten examples of our notable works:"
            />
            <List
                className="base:grid base:grid-cols-2"
                classNameItem="border-b border-grey-600 base:odd:border-r"
                items={workList}
                render={({ title, work }) => (
                    <article key={title}>
                        <h2 className="py-8 px-4 text-grey-100 text-xl font-semibold text-center border-b border-grey-600 sm:py-10 md:py-11 base:py-12">
                            {title}
                        </h2>
                        <Work title={work.title} description={work.description} link={work.link} image={work.image} />
                    </article>
                )}
            />
            <CallToAction
                className="border-0"
                title="Let us Bring your Ideas to Life in the Digital World."
                description="No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product."
                button="Start Project"
            />
        </Box>
    )
}

export default WorksPage
