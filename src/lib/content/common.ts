import { FrequentlyQuestionProps } from "@/lib/@types/props"

import facebook from "@/assets/icons/services/facebook.svg"
import twitter from "@/assets/icons/services/twitter.svg"
import linkedin from "@/assets/icons/services/linkedin.svg"
import email from "@/assets/icons/services/email.svg"
import phone from "@/assets/icons/services/phone.svg"
import location from "@/assets/icons/services/location.svg"
import logo from "@/assets/icons/common/logo.svg"

export const frequentlyQuestions: FrequentlyQuestionProps[] = [
    {
        index: 1,
        title: "What services does SquareUp provide?",
    },
    {
        index: 2,
        title: "How can SquareUp help my business?",
    },
    {
        index: 3,
        title: "What industries does SquareUp work with?",
    },
    {
        index: 4,
        title: "How long does it take to complete a project with SquareUp?",
    },
]

export const footer = {
    facebook,
    twitter,
    linkedin,
    email,
    phone,
    location,
    logo,
}
