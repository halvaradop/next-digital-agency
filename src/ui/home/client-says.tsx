import Image from "next/image"
import { ClientSaysProps } from "@/lib/@types/props"

export const ClientSays = ({ title, description, avatar, name, job }: ClientSaysProps) => {
    return (
        <article className="py-10 px-4 border-t border-grey-600 group-last:border-b">
            <h3 className="text-green-400 text-lg">{title}</h3>
            <p className="my-5 text-grey text-sm">{description}</p>
            <figure className="p-3 flex items-center gap-x-5 rounded-lg border border-grey-600 bg-[#242424] bg-opacity-20">
                <Image className="rounded-md" src={avatar.src} alt={avatar.alt} />
                <figcaption className="flex items-start flex-col">
                    <span className="text-white text-lg">{name}</span>
                    <span className="text-grey">{job}.</span>
                </figcaption>
            </figure>
        </article>
    )
}
