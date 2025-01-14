import Image from "next/image"
import logoIcon from "@/assets/logo.svg"
import { Button } from "@halvaradop/ui-button"
import { design, engineering, projectManagement } from "@/lib/data"
import { ServiceDetails } from "@/ui/services/service-details"

const ServicesPage = () => {
    return (
        <section className="w-11/12 mx-auto">
            <div className="py-16 px-4 text-center border border-y-0 border-grey-600 sm:py-20 sm:px-5 md:py-24 md:px-6 base:py-28 base:px-7">
                <h1 className="text-white text-3xl font-bold">Our Services</h1>
                <p className="mt-4 text-grey">
                    Transform your brand with our innovatie digital solutions that captive and engage your audience
                </p>
            </div>
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
            <div className="py-16 px-[5%] text-center flex items-center flex-col gap-y-4 border border-b-0 border-grey-600 sm:py-20 md:py-24 base:py-28">
                <Image src={logoIcon} alt="SquareUp Icon" />
                <h3 className="text-white text-2xl font-semibold">Let us Bring your Ideas to Life in the Digital World.</h3>
                <p className="text-grey text-sm">
                    No matter which services you choose, we are committed to delivering exceptional results that exceed your
                    expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified
                    vision for your digital product.
                </p>
                <Button className="text-black border-green-700 bg-green-700">Start Project</Button>
            </div>
        </section>
    )
}

export default ServicesPage
