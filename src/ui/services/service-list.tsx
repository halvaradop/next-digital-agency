import { List } from "@/ui/common/list"
import { IconSquare } from "@/ui/common/icon"
import { ServiceListProps } from "@/lib/@types/props"
import { SegmentTitle } from "../common/segment-title"

export const ServiceList = ({ title, services }: ServiceListProps) => {
    return (
        <section className="border border-b-0 border-grey-600">
            <SegmentTitle className="px-0 text-grey-100 text-xl text-center base:text-left">{title}</SegmentTitle>
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
