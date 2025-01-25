import { Metadata } from "next"
import { Box } from "@/ui/common/box"
import { List } from "@/ui/common/list"
import { Segment } from "@/ui/common/segment"
import { Register } from "@/ui/home/register"
import { frequentlyQuestions } from "@/lib/content/common"
import { FrequentlyQuestion } from "@/ui/home/frequently-question"
import { CallToActionStartProject } from "@/ui/common/call-to-action-start-project"

const description = "Get in touch with us today and let us help you with any questions or inquiries you may have."

export const metadata: Metadata = {
    title: "Contacts",
    description,
}

const ContactsPage = () => {
    return (
        <Box className="w-11/12 mx-auto" border="horizontal">
            <Segment title="Contact Us" description={description} />
            <Register className="base:border-x-0" classNameForm="border-x-0" />
            <Segment
                className="border-t border-grey-600"
                title="Frequently Asked Questions"
                description="Still you have any questions? Contact our Team via hello@squareup.com"
            />
            <List
                className="base:grid base:grid-cols-2"
                items={frequentlyQuestions}
                classNameItem="group border-t border-grey-600 base:odd:border-r"
                render={({ title, index }) => <FrequentlyQuestion title={title} index={index} />}
            />
            <CallToActionStartProject className="border-t border-grey-600" />
        </Box>
    )
}

export default ContactsPage
