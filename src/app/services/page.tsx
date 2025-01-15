import { design, engineering, projectManagement } from "@/lib/data"
import { ServiceDetails } from "@/ui/services/service-details"
import { Segment } from "@/ui/segment"
import { CallToAction } from "@/ui/call-to-action"

const ServicesPage = () => {
    return (
        <section className="w-11/12 mx-auto">
            <Segment
                title="Our Services"
                description="Transform your brand with our innovatie digital solutions that captive and engage your audience"
            />
            <ServiceDetails
                title={design.title}
                description={design.description}
                button={design.button}
                services={design.services}
            />
            <ServiceDetails
                title={engineering.title}
                description={engineering.description}
                button={engineering.button}
                services={engineering.services}
            />
            <ServiceDetails
                title={projectManagement.title}
                description={projectManagement.description}
                button={projectManagement.button}
                services={projectManagement.services}
            />
            <CallToAction
                title="Let us Bring your Ideas to Life in the Digital World."
                description="No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product."
                button="Start Project"
            />
        </section>
    )
}

export default ServicesPage
