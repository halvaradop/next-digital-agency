import { images } from "@/lib/images"
import { ServiceIncludesProps } from "./@types/props"

export const design: ServiceIncludesProps = {
    title: "Design",
    description:
        "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
    button: "Our design services include:",
    services: [
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
    ],
}

export const engineering: ServiceIncludesProps = {
    title: "Engineering",
    description:
        "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
    button: "Our engineering services include:",
    services: [
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
    ],
}

export const projectManagement: ServiceIncludesProps = {
    title: "Project Management",
    description:
        "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
    button: "Our project management services include:",
    services: [
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
    ],
}
