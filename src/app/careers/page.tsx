import { Box } from "@/ui/common/box"
import { Card } from "@/ui/common/card"
import { List } from "@/ui/common/list"
import { Segment } from "@/ui/common/segment"
import { CardIndex } from "@/ui/common/card-index"
import {
    careersDesignJob,
    careersDevelopmentJob,
    careersManagementJob,
    careersQaJob,
    careersWelcome,
} from "@/lib/content/careers"
import { SegmentTitle } from "@/ui/common/segment-title"
import { CallToActionStartProject } from "@/ui/common/call-to-action-start-project"

const Careers = () => {
    return (
        <Box className="w-11/12 mx-auto" border="horizontal">
            <Segment
                title="Join Our Team at SquareUp"
                description="Unlock your potential and join our team of innovators and problem solvers."
            />
            <Card
                className="border-b border-grey-600"
                title="Welcome to SquareUp, where talent meets opportunity!"
                description="At SquareUp, we believe that the success of our agency lies in the talent, passion, and dedication of our team members. We are a digital product agency that thrives on innovation, creativity, and collaboration. If you're ready to make a difference and contribute to cutting-edge projects, we invite you to explore career opportunities with us."
                button="Why Work at SquareUp?"
            />
            <List
                className="base:grid base:grid-cols-2"
                classNameItem="pl-0 border-b border-grey-600 base:odd:border-r"
                items={careersWelcome}
                render={({ title, description }) => <CardIndex classNameTitle="pl-0" title={title} description={description} />}
            />
            <Card
                className="border-b border-grey-600"
                title="Current Openings"
                description="We are always on the lookout for talented individuals who are passionate about creating exceptional digital experiences. Whether you're a designer, engineer, project manager, or have skills that align with our agency's mission, we encourage you to explore our open positions."
            />
            <section>
                <SegmentTitle className="text-grey-100 text-xl base:text-left">Design Job Openings</SegmentTitle>
                <List
                    className="lg:grid lg:grid-cols-3"
                    classNameItem="border-b border-grey-600 lg:border-r lg:last:border-r-0"
                    items={careersDesignJob}
                    render={(item) => (
                        <Card className="h-full lg:flex lg:flex-col lg:gap-y-5" classNameButton="w-full lg:mt-auto" {...item} />
                    )}
                />
            </section>
            <section>
                <SegmentTitle className="text-grey-100 text-xl base:text-left">Development Job Openings</SegmentTitle>
                <List
                    className="lg:grid lg:grid-cols-3"
                    classNameItem="border-b border-grey-600 lg:border-r lg:last:border-r-0"
                    items={careersDevelopmentJob}
                    render={(item) => (
                        <Card className="h-full lg:flex lg:flex-col lg:gap-y-5" classNameButton="w-full lg:mt-auto" {...item} />
                    )}
                />
            </section>
            <section>
                <SegmentTitle className="text-grey-100 text-xl base:text-left">Management Job Openings</SegmentTitle>
                <List
                    className="lg:grid lg:grid-cols-3"
                    classNameItem="border-b border-grey-600 lg:border-r lg:last:border-r-0"
                    items={careersManagementJob}
                    render={(item) => (
                        <Card className="h-full lg:flex lg:flex-col lg:gap-y-5" classNameButton="w-full lg:mt-auto" {...item} />
                    )}
                />
            </section>
            <section>
                <SegmentTitle className="text-grey-100 text-xl base:text-left">QA Job Openings</SegmentTitle>
                <List
                    className="lg:grid lg:grid-cols-3"
                    classNameItem="border-b border-grey-600 lg:border-r lg:last:border-r-0"
                    items={careersQaJob}
                    render={(item) => (
                        <Card className="h-full lg:flex lg:flex-col lg:gap-y-5" classNameButton="w-full lg:mt-auto" {...item} />
                    )}
                />
            </section>
            <CallToActionStartProject />
        </Box>
    )
}

export default Careers
