import { Box } from "@/ui/common/box"
import { Work } from "@/ui/works/work"
import { Card } from "@/ui/common/card"
import { List } from "@/ui/common/list"
import { Segment } from "@/ui/common/segment"
import { CallToAction } from "@/ui/common/call-to-action"
import { workList } from "@/lib/content/works"
import { SegmentTitle } from "@/ui/common/segment-title"

const WorksPage = () => {
    return (
        <Box className="w-11/12 mx-auto" border="horizontal">
            <Segment
                title="Our Works"
                description="Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise."
            />
            <Card
                className="border-y border-grey-600"
                title="At SquareUp"
                description="We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success."
                button="Here are ten examples of our notable works:"
            />
            <List
                className="base:grid base:grid-cols-2"
                classNameItem="border-b border-grey-600 base:odd:border-r"
                items={workList}
                render={({ title, work: { title: titleWork, description, link, image } }) => (
                    <article className="h-full grid grid-rows-[1fr_auto]" key={title}>
                        <SegmentTitle className="content-center text-grey-100 base:text-left">{title}</SegmentTitle>
                        <Work title={titleWork} description={description} link={link} image={image} />
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
