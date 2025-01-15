import { Card } from "@/ui/card"
import { ServiceIncludesProps } from "@/lib/@types/props"
import { ServiceList } from "./service-list"

export const ServiceDetails = ({ title, description, button, services }: ServiceIncludesProps) => {
    return (
        <section>
            <Card title={title} description={description} button={button} />
            {services.map(({ title, services }, key) => (
                <ServiceList title={title} services={services} key={key} />
            ))}
        </section>
    )
}
