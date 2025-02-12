import Image from "next/image"
import { merge } from "@halvaradop/ui-core"
import { Button } from "@halvaradop/ui-button"
import { ClassNameProps } from "@/lib/@types/props"
import logoIcon from "@/assets/icons/common/logo.svg"

export const CallToActionStartProject = ({ className }: ClassNameProps) => {
    return (
        <section className={merge("py-10 px-4 text-grey-100 text-center sm:py-11 sm:px-5 md:py-12 md:px-6 base:px-7", className)}>
            <div className="base:flex base:items-center base:gap-x-5">
                <Image className="size-16 mx-auto base:justify-self-start" src={logoIcon} alt="SquareUp Logo Icon" />
                <div className="base:text-left">
                    <h3 className="my-5 text-2xl font-semibold base:mt-0 base:mb-2 base:text-lg">
                        Today, SquareUp Continues to Thrive as a Leading Digital Product Agency.....
                    </h3>
                    <p className="text-sm">
                        Combining the power of design, engineering, and project management to create transformative digital
                        experiences. They invite you to join them on their journey and discover how they can help bring your
                        digital ideas to life.
                    </p>
                </div>
            </div>
            <div className="mt-5 p-4 rounded-lg border border-grey-600 bg-[#242424] bg-opacity-20 base:mt-8 base:grid base:grid-cols-[auto_1fr_auto] base:items-center base:gap-x-5">
                <h4 className="text-lg base:text-base">Welcome to SquareUp</h4>
                <p className="my-4 p-4 text-white text-lg rounded-lg bg-grey-600 base:my-0 base:p-2 base:text-base">
                    Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.
                </p>
                <Button className="mx-auto" variant="secondary">
                    Start Project
                </Button>
            </div>
        </section>
    )
}
