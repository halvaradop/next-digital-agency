/**
 * @deprecated
 * TODO:
 *  - Separate the data from the pages
 *  - Delete this file
 */
import { home, images, ourClients, works } from "@/lib/images"
import { ClientSaysProps, FrequentlyQuestionProps, CardIndexProps, ServiceListProps, WorkProps } from "@/lib/@types/props"

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

export const workList: { title: string; work: WorkProps }[] = [
    {
        title: "E-Commerce Platform for Fashion Hub",
        work: {
            title: "Chic Boutique",
            description:
                "We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.",
            link: "htttps:/www.chicboutique.com",
            image: {
                src: works.chicBoutique,
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
                src: works.hungryBites,
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
                src: works.eventMasters,
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
                src: works.proTech,
                alt: "ProTech Solution Imge",
            },
        },
    },
]

export const processList: CardIndexProps[] = [
    {
        index: 1,
        title: "Discovery",
        description:
            "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.",
    },
    {
        index: 2,
        title: "Planning and Strategy",
        description:
            "Based on the gathered information, we create a comprehensive project plan and strategy. This includes defining project milestones, timelines, deliverables, and resource allocation. We collaborate closely with you to align our strategy with your vision.",
    },
    {
        index: 3,
        title: "Design",
        description:
            "Our expert designers translate the project requirements into captivating visual designs. We create wireframes, mockups, and interactive prototypes to showcase the user interface, user experience, and overall design aesthetics. We iterate on the designs based on your feedback until we achieve the perfect look and feel.",
    },
    {
        index: 4,
        title: "Development",
        description:
            "Once the designs are approved, our skilled development team brings them to life. We use cutting-edge technologies and coding best practices to build robust and scalable digital products. Throughout the development phase, we maintain open lines of communication to keep you updated on progress and address any questions or concerns.",
    },
    {
        index: 5,
        title: "Testing and Quality Assurance",
        description:
            "We conduct rigorous testing to ensure that your digital product functions flawlessly across different devices, browsers, and operating systems. Our quality assurance team meticulously checks for bugs, usability issues, and performance bottlenecks. We strive for a seamless user experience and a high level of reliability.",
    },
    {
        index: 6,
        title: "Deployment and Launch",
        description:
            "When your digital product is thoroughly tested and meets your satisfaction, we prepare for deployment. We handle all the technical aspects of launching your product, ensuring a smooth transition from development to the live environment. We assist with setting up hosting, configuring servers, and managing any required integrations.",
    },
    {
        index: 7,
        title: "Post-Launch Support",
        description:
            "Our commitment to your success doesn't end with the launch. We provide ongoing support and maintenance services to ensure your digital product continues to perform optimally. We offer different support packages based on your needs, including bug fixes, feature enhancements, security updates, and technical support.",
    },
    {
        index: 8,
        title: "Continuous Improvement",
        description:
            "We believe in continuous improvement and strive to optimize your digital product even after launch. We monitor user feedback, analytics, and market trends to identify opportunities for enhancement and growth. We proactively suggest improvements and updates to keep your digital product ahead of the curve.",
    },
]

export const aboutList: CardIndexProps[] = [
    {
        index: 1,
        title: "Design",
        description:
            "Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency's design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression.",
    },
    {
        index: 2,
        title: "Engineering",
        description:
            "Meanwhile, a team of brilliant engineers was busy crafting the backbone of digital innovation. With their expertise in coding and development, they founded the engineering division of SquareUp. They believed that technology had the power to transform ideas into reality. Their mission was to build robust, scalable, and cutting-edge digital solutions that would push the boundaries of what was possible.",
    },
    {
        index: 3,
        title: "Project Management",
        description:
            "In the midst of the creative and technical minds, a group of project managers emerged as the glue that held everything together. They understood the importance of effective communication, organization, and efficient execution. With their skills in planning and coordination, they founded SquareUp's project management team. Their mission was to ensure that every project ran smoothly, on time, and within budget.",
    },
    {
        index: 4,
        title: "Collaboration",
        description:
            "At SquareUp, these three departments came together to form a cohesive and collaborative unit. They embraced the power of collaboration and recognized that their combined expertise would result in truly exceptional digital products. They believed that by working closely with their clients, understanding their needs, and involving them in the creative process, they could deliver solutions that surpassed expectations.",
    },
    {
        index: 5,
        title: "Client-Centric Approach",
        description:
            "SquareUp's success was not solely measured by their technical prowess or design skills but by their unwavering commitment to their clients. They placed their clients at the center of everything they did. They took the time to listen, understand their unique challenges, and tailor their services to meet their specific requirements. Their mission was to become trusted partners, guiding businesses on their digital journey.",
    },
    {
        index: 6,
        title: "Driving Success",
        description:
            "With each project, SquareUp's reputation grew. Their portfolio expanded to include a diverse range of industries and their impact was felt far and wide. From startups to established enterprises, businesses sought out SquareUp for their expertise in creating digital products that delivered tangible results. SquareUp's success was driven by their passion for innovation, their dedication to quality, and their commitment to helping their clients succeed in the digital world.",
    },
]
