import { merge } from "@halvaradop/ui-core"
import { Input } from "@halvaradop/ui-input"
import { Label } from "@halvaradop/ui-label"
import { Button } from "@halvaradop/ui-button"
import { Checkbox } from "@halvaradop/ui-checkbox"
import { RegisterProps } from "@/lib/@types/props"

export const Register = ({ className, classNameForm }: RegisterProps) => {
    return (
        <section className={merge("base:border-x base:border-grey-600", className)}>
            <form
                className={merge(
                    "py-6 px-4 text-white font-normal border-x border-grey-600 space-y-6 sm:mx-auto md:max-w-screen-md base:py-10 base:px-8 base:grid base:grid-cols-2 base:gap-5 base:space-y-0 lg:py-14 lg:px-10",
                    classNameForm,
                )}
            >
                <Label className="p-4 text-white font-medium block rounded-lg border border-grey-600 bg-[#242424] bg-opacity-50">
                    Full Name
                    <Input
                        className="text-grey-200 font-normal indent-0 caret-grey-300 bg-transparent placeholder-grey-200"
                        variant="line"
                        placeholder="Type here"
                    />
                </Label>
                <Label className="p-4 text-white font-medium block rounded-lg border border-grey-600 bg-[#242424] bg-opacity-50">
                    Email
                    <Input
                        className="text-grey-200 font-normal indent-0 caret-grey-300 bg-transparent placeholder-grey-200"
                        variant="line"
                        type="email"
                        placeholder="Type here"
                    />
                </Label>
                <fieldset className="p-4 text-white rounded-lg border border-grey-600 space-y-4 bg-[#242424] bg-opacity-50 base:grid base:grid-cols-2 base:space-y-5 base:col-span-2">
                    <span className="font-medium base:col-span-2">Why are you contacting us?</span>
                    <Label className="text-grey flex items-center gap-x-3">
                        <Checkbox className="checked:bg-transparent" size="lg" color="green" value="web-design" />
                        Web Design
                    </Label>
                    <Label className="text-grey flex items-center gap-x-3">
                        <Checkbox className="checked:bg-transparent" size="lg" color="green" value="collaboration" />
                        Collaboration
                    </Label>
                    <Label className="text-grey flex items-center gap-x-3">
                        <Checkbox className="checked:bg-transparent" size="lg" color="green" value="mobile-app-design" />
                        Mobile App Design
                    </Label>
                    <Label className="text-grey flex items-center gap-x-3">
                        <Checkbox className="checked:bg-transparent" size="lg" color="green" value="others" />
                        Others
                    </Label>
                </fieldset>
                <Label className="p-4 text-white font-medium block rounded-lg border border-grey-600 bg-[#242424] bg-opacity-50 base:col-span-2">
                    Yout Message
                    <Input
                        className="text-grey-200 font-normal indent-0 caret-grey-300 bg-transparent placeholder-grey-200"
                        variant="line"
                        placeholder="Type here"
                    />
                </Label>
                <Button className="max-w-56 mx-auto base:col-span-2" variant="secondary" fullWidth>
                    Submit
                </Button>
            </form>
        </section>
    )
}
