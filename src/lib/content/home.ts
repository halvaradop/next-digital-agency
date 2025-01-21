import { ClientSaysProps } from "@/lib/@types/props"

import zapier from "@/assets/icons/home/zapier.svg"
import spotify from "@/assets/icons/home/spotify.svg"
import zoom from "@/assets/icons/home/zoom.svg"
import slack from "@/assets/icons/home/slack.svg"
import amazon from "@/assets/icons/home/amazon.svg"
import adobe from "@/assets/icons/home/adobe.svg"

import design from "@/assets/icons/home/design.svg"
import engineering from "@/assets/icons/home/engineering.svg"
import projectManagement from "@/assets/icons/home/project-management.svg"
import expertise from "@/assets/icons/home/expertise.svg"
import clientCentric from "@/assets/icons/home/client-centric.svg"
import resultsDriven from "@/assets/icons/home/results-driven.svg"
import collaborative from "@/assets/icons/home/collaborative.svg"

import johnSmith from "@/assets/icons/home/john-smith.svg"
import sarashJohnson from "@/assets/icons/home/sarah-johnson.svg"
import markThompson from "@/assets/icons/home/mark-thompson.svg"
import lauraAdams from "@/assets/icons/home/laura-adams.svg"
import michaelAnderson from "@/assets/icons/home/michael-aderson.svg"
import emilyTurner from "@/assets/icons/home/emily-turner.svg"

export const companies = {
    zapier,
    spotify,
    zoom,
    slack,
    amazon,
    adobe,
}

export const homeOurServices = [
    {
        title: "Design",
        description:
            "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
        button: "Learn More",
        src: design,
        alt: "Design Icon",
    },
    {
        title: "Engineering",
        description:
            "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
        button: "Learn More",
        src: engineering,
        alt: "Enginnering Icon",
    },
    {
        title: "Project Management",
        description:
            "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
        button: "Learn More",
        src: projectManagement,
        alt: "Project Management Icon",
    },
]

export const homeChooseSquareUp = [
    {
        title: "Expertise",
        description:
            "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
        src: expertise,
        alt: "Expertise Icon",
    },
    {
        title: "Client-Centric Approach",
        description:
            "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.",
        src: clientCentric,
        alt: "Client Centric Icon",
    },
    {
        title: "Results-Driven Solutions",
        description:
            "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.",
        src: resultsDriven,
        alt: "Results Driven Icon",
    },
    {
        title: "Collaborative Partnership",
        description:
            "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.",
        src: collaborative,
        alt: "Collaborative Icon",
    },
]

export const homeOurClientSays: ClientSaysProps[] = [
    {
        title: "SquareUp has been Instrumental in Transforming our Online Presence. ",
        description:
            "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
        avatar: {
            src: johnSmith,
            alt: "John Smith Avatar",
        },
        name: "John Smith",
        job: "CEO of Chich Boutique",
    },
    {
        title: "Working with SquareUp was a breeze.",
        description:
            "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend.",
        avatar: {
            src: sarashJohnson,
            alt: "Sarah Johnson Avatar",
        },
        name: "Sarah Johnson",
        job: "Founder of HungryBites",
    },
    {
        title: "SquareUp developed a comprehensive booking and reservation system for our event management company",
        description:
            "Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.",
        avatar: {
            src: markThompson,
            alt: "Mark Thompson Avatar",
        },
        name: "Mark Thompson",
        job: "CEO of EventMasters",
    },
    {
        title: "ProTech Solutions turned to SquareUp to automate our workflow",
        description:
            "They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner.",
        avatar: {
            src: lauraAdams,
            alt: "Laura Adams Avatar",
        },
        name: "Laura Adams",
        job: "COO of ProTech Solutions",
    },
    {
        title: "SquareUp designed and developed a captivating web portal for showcasing our real estate listings.",
        description:
            "The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched.",
        avatar: {
            src: michaelAnderson,
            alt: "Michael Anderson Avatar",
        },
        name: "Michael Anderson",
        job: "Founder of Dream Homes Realty",
    },
    {
        title: "FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.",
        description:
            "SquareUp's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs.",
        avatar: {
            src: emilyTurner,
            alt: "Emily Turner Avatar",
        },
        name: "Emily Turner",
        job: "CEO of FitLife Tracker",
    },
]
