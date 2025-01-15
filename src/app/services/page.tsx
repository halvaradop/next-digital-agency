import { Card } from "@/ui/card"
import { List } from "@/ui/list"
import { Segment } from "@/ui/segment"
import { CallToAction } from "@/ui/call-to-action"
import { ServiceList } from "@/ui/services/service-list"
import { design, engineering, projectManagement } from "@/lib/data"

const ServicesPage = () => {
    return (
        <section className="w-11/12 mx-auto">
            <Segment
                title="Our Services"
                description="Transform your brand with our innovatie digital solutions that captive and engage your audience"
            />
            <section>
                <Card
                    title="Design"
                    description="At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences."
                    button="Our design services include:"
                />
                <List items={design} render={(item) => <ServiceList {...item} />} />
            </section>
            <section>
                <Card
                    title="Engineering"
                    description="Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs."
                    button="Our engineering services include:"
                />
                <List items={engineering} render={(item) => <ServiceList {...item} />} />
            </section>
            <section>
                <Card
                    title="Project Management"
                    description="Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process."
                    button="Our project management services include:"
                />
                <List items={projectManagement} render={(item) => <ServiceList {...item} />} />
            </section>
            <CallToAction
                title="Let us Bring your Ideas to Life in the Digital World."
                description="No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product."
                button="Start Project"
            />
        </section>
    )
}

export default ServicesPage
