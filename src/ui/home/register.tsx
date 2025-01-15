import { Input } from "@halvaradop/ui-input"
import { Label } from "@halvaradop/ui-label"
import { Button } from "@halvaradop/ui-button"
import { Checkbox } from "@halvaradop/ui-checkbox"

export const Register = () => {
    return (
        <form className="py-6 px-4 border-x border-grey-600 space-y-6">
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
            <fieldset className="p-4 text-white rounded-lg border border-grey-600 space-y-4 bg-[#242424] bg-opacity-50">
                <span className="font-medium">Why are you contacting us?</span>
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
            <Label className="p-4 text-white font-normal block rounded-lg border border-grey-600 bg-[#242424] bg-opacity-50">
                Yout Message
                <Input
                    className="text-grey-200 font-normal indent-0 rounded-none caret-grey-300 border-0 border-b border-grey-400 bg-transparent placeholder-grey-200"
                    placeholder="Type here"
                />
            </Label>
            <Button className="text-black border-green-700 bg-green-700" fullWidth>
                Submit
            </Button>
        </form>
    )
}
