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
                    "py-6 px-4 border-x border-grey-600 space-y-6 sm:mx-auto md:max-w-screen-md base:py-10 base:px-8 base:grid base:grid-cols-2 base:gap-5 base:space-y-0 lg:py-14 lg:px-10",
                    classNameForm,
                )}
            >
                <Label className="p-4 text-white font-normal block rounded-lg border border-grey-600 bg-[#242424] bg-opacity-50">
                    Full Name
                    <Input
                        className="text-grey-200 font-normal indent-0 rounded-none caret-grey-300 border-0 border-b border-grey-400 bg-transparent placeholder-grey-200"
                        placeholder="Type here"
                    />
                </Label>
                <Label className="p-4 text-white font-normal block rounded-lg border border-grey-600 bg-[#242424] bg-opacity-50">
                    Email
                    <Input
                        className="text-grey-200 font-normal indent-0 rounded-none caret-grey-300 border-0 border-b border-grey-400 bg-transparent placeholder-grey-200"
                        type="email"
                        placeholder="Type here"
                    />
                </Label>
                <fieldset className="p-4 text-white rounded-lg border border-grey-600 space-y-4 bg-[#242424] bg-opacity-50 base:grid base:grid-cols-2 base:space-y-5 base:col-span-2">
                    <span className="font-medium base:col-span-2">Why are you contacting us?</span>
                    <Label className="text-grey flex items-center gap-x-3">
                        <Checkbox
                            className="checked:bg-transparent focus-within:ring-1 focus-within:ring-offset-0"
                            size="lg"
                            value="web-design"
                        />
                        Web Design
                    </Label>
                    <Label className="text-grey flex items-center gap-x-3">
                        <Checkbox
                            className="checked:bg-transparent focus-within:ring-1 focus-within:ring-offset-0"
                            size="lg"
                            value="collaboration"
                        />
                        Collaboration
                    </Label>
                    <Label className="text-grey flex items-center gap-x-3">
                        <Checkbox
                            className="checked:bg-transparent focus-within:ring-1 focus-within:ring-offset-0"
                            size="lg"
                            value="mobile-app-design"
                        />
                        Mobile App Design
                    </Label>
                    <Label className="text-grey flex items-center gap-x-3">
                        <Checkbox
                            className="checked:bg-transparent focus-within:ring-1 focus-within:ring-offset-0"
                            size="lg"
                            value="others"
                        />
                        Others
                    </Label>
                </fieldset>
                <Label className="p-4 text-white font-normal block rounded-lg border border-grey-600 bg-[#242424] bg-opacity-50 base:col-span-2">
                    Yout Message
                    <Input
                        className="text-grey-200 font-normal indent-0 rounded-none caret-grey-300 border-0 border-b border-grey-400 bg-transparent placeholder-grey-200"
                        placeholder="Type here"
                    />
                </Label>
                <Button className="max-w-56 mx-auto text-black border-green-700 bg-green-700 base:col-span-2" fullWidth>
                    Submit
                </Button>
            </form>
        </section>
    )
}
