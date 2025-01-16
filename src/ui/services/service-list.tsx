import { IconSquare } from "@/ui/icon"
import { ServiceListProps } from "@/lib/@types/props"
import { List } from "@/ui/list"

export const ServiceList = ({ title, services }: ServiceListProps) => {
    return (
        <section className="border border-b-0 border-grey-600">
            <h2 className="py-8 text-grey-100 text-xl font-semibold text-center border-b border-grey-600 sm:py-10 md:py-11 base:py-12 base:pl-7 base:text-left">
                {title}
            </h2>
            <List
                className="grid grid-cols-2 text-grey font-medium base:grid-cols-4"
                classNameItem="py-5 px-4 service-item sm:py-7 sm:px-5 md:py-8 md:px-6 base:py-10 base:px-7"
                items={services}
                render={({ title, src, alt }) => (
                    <>
                        <IconSquare src={src} alt={alt} />
                        <h3 className="mt-4">{title}</h3>
                    </>
                )}
            />
        </section>
    )
}
