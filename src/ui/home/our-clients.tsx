import { homeOurClientSays } from "@/lib/data"
import { Segment } from "@/ui/segment"
import { ClientSays } from "./client-says"

export const OurClients = () => {
    return (
        <section className="border-t border-grey-600">
            <Segment
                title="What our Clients say About us"
                description="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us"
            />
            <section className="border-x border-grey-600">
                {homeOurClientSays.map(({ title, description, avatar, job, name }, key) => (
                    <ClientSays key={key} title={title} description={description} avatar={avatar} name={name} job={job} />
                ))}
            </section>
        </section>
    )
}
