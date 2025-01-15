import { Card } from "@/ui/card"
import { ProductListProps } from "@/lib/@types/props"
import { Segment } from "@/ui/segment"

export const ProductList = ({ title, description, products }: ProductListProps) => {
    return (
        <section>
            <Segment title={title} description={description} />
            <ul>
                {products.map(({ title, description, button, src, alt }, key) => (
                    <Card key={key} title={title} description={description} button={button} src={src} alt={alt} />
                ))}
            </ul>
        </section>
    )
}
