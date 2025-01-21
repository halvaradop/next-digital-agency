import { WorkProps } from "@/lib/@types/props"

import proTech from "@/assets/icons/works/pro-tech.svg"
import chicBoutique from "@/assets/icons/works/boutique.svg"
import hungryBites from "@/assets/icons/works/hungry-bites.svg"
import eventMasters from "@/assets/icons/works/event-master.svg"

export const works = {
    chicBoutique,
    hungryBites,
    eventMasters,
    proTech,
}

export const workList: { title: string; work: WorkProps }[] = [
    {
        title: "E-Commerce Platform for Fashion Hub",
        work: {
            title: "Chic Boutique",
            description:
                "We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.",
            link: "htttps:/www.chicboutique.com",
            image: {
                src: chicBoutique,
                alt: "Chic Boutique Image",
            },
        },
    },
    {
        title: "Mobile App for Food Delivery Service",
        work: {
            title: "HungryBites",
            description:
                "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.",
            link: "htttps:/www.hungrybites.com",
            image: {
                src: hungryBites,
                alt: "Hungry Bits Image",
            },
        },
    },
    {
        title: "Booking and Reservation System for Event Management",
        work: {
            title: "EventMasters",
            description:
                "EventMasters required a comprehensive booking and reservation system for their event management services. We designed a user-friendly platform that allowed seamless event registration, ticketing, and attendee management, resulting in streamlined processes and enhanced customer experiences.",
            link: "htttps:/www.eventmasters.com",
            image: {
                src: eventMasters,
                alt: "Event Master Image",
            },
        },
    },
    {
        title: "Custom Software for Workflow Automation",
        work: {
            title: "ProTech Solutions",
            description:
                "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.",
            link: "htttps:/www.protechsolutions.com",
            image: {
                src: proTech,
                alt: "ProTech Solution Imge",
            },
        },
    },
]
