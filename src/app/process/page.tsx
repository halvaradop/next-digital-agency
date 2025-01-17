import { Box } from "@/ui/box"
import { Card } from "@/ui/card"
import { List } from "@/ui/list"
import { Segment } from "@/ui/segment"
import { processList } from "@/lib/data"
import { Register } from "@/ui/home/register"
import { Process } from "@/ui/process/process"
import { CallToAction } from "@/ui/call-to-action"

const ProcessPage = () => {
    return (
        <Box className="w-11/12 mx-auto" border="horizontal">
            <Segment
                title="Process of Starting the Project"
                description="At SquareUp, we value transparency, collaboration, and delivering exceptional results."
            />
            <Card
                className="border-b border-grey-600"
                title="At SquareUp"
                description="We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach."
                button="Here's an overview of our typical process:"
            />
            <List
                className="base:grid base:grid-cols-2"
                classNameItem="border-b border-grey-600 base:odd:border-r"
                items={processList}
                render={(item) => <Process {...item} />}
            />
            <CallToAction
                border="none"
                title="Thank you for your Interest in SquareUp."
                description="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
                button="Start Project"
            />
            <Register />
        </Box>
    )
}

export default ProcessPage
