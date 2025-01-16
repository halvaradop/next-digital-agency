import { home, images, ourClients } from "@/lib/images"
import { ClientSaysProps, FrequentlyQuestionProps, ServiceListProps } from "@/lib/@types/props"

export const design: ServiceListProps[] = [
    {
        title: "User Experience (UX) Design",
        services: [
            {
                title: "User Reserach and Persona Development",
                src: images.userResearch,
                alt: "User Research Icon",
            },
            {
                title: "Information Architecture and Wireframing",
                src: images.informationArchitecture,
                alt: "Information Architecture Icon",
            },
            {
                title: "Interatice Prototyping and User Testing",
                src: images.interactivePrototyping,
                alt: "Interactive Prototyping Icon",
            },
            {
                title: "UI Design and Visual Branding",
                src: images.uiDesign,
                alt: "UI Design Icon",
            },
        ],
    },
    {
        title: "User Interface (UI) Design",
        services: [
            {
                title: "Intuitive and Visually Appealing Interface Design",
                src: images.intuitive,
                alt: "Intuitive Icon",
            },
            {
                title: "Custtom Iconography and Illustration",
                src: images.custom,
                alt: "Custom Iconography Icon",
            },
            {
                title: "Typography and Color Palette Selection",
                src: images.typography,
                alt: "Typography Icon",
            },
            {
                title: "Responsive Design for Various Devices",
                src: images.responsiveDesign,
                alt: "Responsive Design Icon",
            },
        ],
    },
    {
        title: "Branding and Identity",
        services: [
            {
                title: "Logo Design and Visual Identity",
                src: images.logoDesign,
                alt: "Logo Design Icon",
            },
            {
                title: "Brand Strategy and Positioning",
                src: images.brandStrategy,
                alt: "Brand Strategy Icon",
            },
            {
                title: "Brand Guidelines and Style Guides",
                src: images.brandGuidelines,
                alt: "Brand Guidelines Icon",
            },
            {
                title: "Marketing Collateral and Design (Brochures, Business Cards, etc.)",
                src: images.marketing,
                alt: "Marketing Collateral Icon",
            },
        ],
    },
]

export const engineering: ServiceListProps[] = [
    {
        title: "Web Development",
        services: [
            {
                title: "Frontend Development (HTML, CSS, JavaScript)",
                src: images.frontend,
                alt: "Frontend Development Icon",
            },
            {
                title: "Backend Development (PHP, Python, Ruby)",
                src: images.backend,
                alt: "Backend Development Icon",
            },
            {
                title: "Content Management System (CMS) Development (WordPress, Drupal)",
                src: images.management,
                alt: "CMS Icon",
            },
            {
                title: "E-Commerce Platform Development (Magento, Shopify)",
                src: images.ecommerce,
                alt: "E-Commerce Icon",
            },
        ],
    },
    {
        title: "Mobile App Development",
        services: [
            {
                title: "Native iOs and Android App Development",
                src: images.nativeIOS,
                alt: "Operating System Icon",
            },
            {
                title: "Cross-Platform App Development (React Native, Flutter)",
                src: images.crossPlatform,
                alt: "Cross-Platform Icon",
            },
            {
                title: "App Prototyping and UI/UX Design Integration",
                src: images.appPrototyping,
                alt: "App Prototyping Icon",
            },
            {
                title: "App Testing Deployment and Maintenance",
                src: images.appTesting,
                alt: "App Testing Deployment Icon",
            },
        ],
    },
    {
        title: "Custom Software Development",
        services: [
            {
                title: "Enterprise Software Development",
                src: images.enterprise,
                alt: "Enterprise Software Icon",
            },
            {
                title: "Custom Web Application Development",
                src: images.customWeb,
                alt: "Custom Web App Icon",
            },
            {
                title: "Integration with Third-Party APIs and Systems",
                src: images.thirdParty,
                alt: "Third-Party Integration Icon",
            },
            {
                title: "Legacy System Modernization and Migration",
                src: images.legacy,
                alt: "Legacy System Icon",
            },
        ],
    },
]

export const projectManagement: ServiceListProps[] = [
    {
        title: "Project Planning and Scoping",
        services: [
            {
                title: "Requirements Gathering and Analysis",
                src: images.requirements,
                alt: "Requirements Gathering Icon",
            },
            {
                title: "Project Roadmap and Timeline Development",
                src: images.roadmap,
                alt: "",
            },
            {
                title: "Resource Allocation and Task Assignment",
                src: images.resourceAllocation1,
                alt: "",
            },
            {
                title: "Resouce Allocation and Task Assignment",
                src: images.resourceAllocation2,
                alt: "",
            },
        ],
    },
    {
        title: "Agile Development",
        services: [
            {
                title: "Iterative Development and Sprints",
                src: images.iterative,
                alt: "",
            },
            {
                title: "Scrum or Kanban Methodology Implementation",
                src: images.scrum,
                alt: "",
            },
            {
                title: "Regular Progress Updates and Demos",
                src: images.regularProgress,
                alt: "",
            },
            {
                title: "Continuos Improvements and Feedback Incorporation",
                src: images.continuosImprovement,
                alt: "",
            },
        ],
    },
    {
        title: "Quality Assurance and Testing",
        services: [
            {
                title: "Test Planing and Execution",
                src: images.testPlanning,
                alt: "",
            },
            {
                title: "Functional and Usability Testing",
                src: images.functionalUsability,
                alt: "",
            },
            {
                title: "Performance and Security Testing",
                src: images.performanceSecutiry,
                alt: "",
            },
            {
                title: "Bug Tracking and Issue Resolution",
                src: images.bugTracking,
                alt: "",
            },
        ],
    },
]

export const homeOurServices = [
    {
        title: "Design",
        description:
            "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
        button: "Learn More",
        src: home.design,
        alt: "Design Icon",
    },
    {
        title: "Engineering",
        description:
            "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
        button: "Learn More",
        src: home.engineering,
        alt: "Enginnering Icon",
    },
    {
        title: "Project Management",
        description:
            "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
        button: "Learn More",
        src: home.projectManagement,
        alt: "Project Management Icon",
    },
]

export const homeChooseSquareUp = [
    {
        title: "Expertise",
        description:
            "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
        src: home.expertise,
        alt: "Expertise Icon",
    },
    {
        title: "Client-Centric Approach",
        description:
            "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.",
        src: home.clientCentric,
        alt: "Client Centric Icon",
    },
    {
        title: "Results-Driven Solutions",
        description:
            "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.",
        src: home.resultsDriven,
        alt: "Results Driven Icon",
    },
    {
        title: "Collaborative Partnership",
        description:
            "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.",
        src: home.collaborative,
        alt: "Collaborative Icon",
    },
]

export const homeOurClientSays: ClientSaysProps[] = [
    {
        title: "SquareUp has been Instrumental in Transforming our Online Presence. ",
        description:
            "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
        avatar: {
            src: ourClients.johnSmith,
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
            src: ourClients.sarashJohnson,
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
            src: ourClients.markThompson,
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
            src: ourClients.lauraAdams,
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
            src: ourClients.michaelAnderson,
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
            src: ourClients.emilyTurner,
            alt: "Emily Turner Avatar",
        },
        name: "Emily Turner",
        job: "CEO of FitLife Tracker",
    },
]

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
