import { Box } from "@/ui/box"
import { List } from "@/ui/list"
import { Segment } from "@/ui/segment"
import { Register } from "@/ui/home/register"
import { FrequentlyQuestion } from "@/ui/home/frequently-question"
import { CallToActionStartProject } from "@/ui/call-to-action-start-project"
import { frequentlyQuestions } from "@/lib/content/contacts"

const ContactsPage = () => {
    return (
        <Box className="w-11/12 mx-auto" border="horizontal">
            <Segment
                title="Contact Us"
                description="Get in touch with us today and let us help you with any questions or inquiries you may have."
            />
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
                render={(item) => <FrequentlyQuestion {...item} />}
            />
            <CallToActionStartProject className="border-t border-grey-600" />
        </Box>
    )
}

export default ContactsPage
