import { Button } from "@halvaradop/ui-button"
import { ServiceIncludesProps } from "@/lib/@types/props"
import { ServiceList } from "./service-list"

export const ServiceDetails = ({ title, description, button, services }: ServiceIncludesProps) => {
    return (
        <section>
            <div className="py-10 px-4 border border-b-0 border-grey-600 sm:py-11 sm:px-5 md:py-12 md:px-6 base:py-14 base:px-7">
                <h2 className="text-white text-2xl font-bold">{title}</h2>
                <p className="mt-4 mb-8 text-grey">{description}</p>
                <Button className="h-auto py-2 border-grey-600 bg-grey-600">{button}</Button>
            </div>
            {services.map(({ title, services }, key) => (
                <ServiceList title={title} services={services} key={key} />
            ))}
        </section>
    )
}
