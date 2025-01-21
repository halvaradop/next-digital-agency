import { ServiceListProps } from "@/lib/@types/props"

import appPrototyping from "@/assets/icons/services/app-prototyping.svg"
import appTesting from "@/assets/icons/services/app-testing.svg"
import backend from "@/assets/icons/common/backend.svg"
import brandGuidelines from "@/assets/icons/services/brand-guidelines.svg"
import brandStrategy from "@/assets/icons/services/brand-strategy.svg"
import bugTracking from "@/assets/icons/common/wrench.svg"
import management from "@/assets/icons/common/content-management.svg"
import continuosImprovement from "@/assets/icons/services/continuos-improvement.svg"
import crossPlatform from "@/assets/icons/services/cross-platform.svg"
import customWeb from "@/assets/icons/services/custom-web.svg"
import custom from "@/assets/icons/services/custom.svg"
import ecommerce from "@/assets/icons/services/ecommerce.svg"
import enterprise from "@/assets/icons/services/enterprise.svg"
import frontend from "@/assets/icons/common/frontend.svg"
import functionalUsability from "@/assets/icons/common/security.svg"
import interactivePrototyping from "@/assets/icons/services/interactive-prototyping.svg"
import informationArchitecture from "@/assets/icons/common/copy-paste.svg"
import intuitive from "@/assets/icons/common/mouse-hover.svg"
import iterative from "@/assets/icons/services/iterative.svg"
import legacy from "@/assets/icons/services/legacy.svg"
import logoDesign from "@/assets/icons/services/logo-design.svg"
import marketing from "@/assets/icons/services/marketing.svg"
import nativeIOS from "@/assets/icons/services/native-ios.svg"
import performanceSecutiry from "@/assets/icons/common/table.svg"
import regularProgress from "@/assets/icons/services/regular-progress.svg"
import requirements from "@/assets/icons/services/requirements.svg"
import resourceAllocation1 from "@/assets/icons/services/resource-allocation-v1.svg"
import resourceAllocation2 from "@/assets/icons/services/resource-allocation-v2.svg"
import responsiveDesign from "@/assets/icons/services/responsive-design.svg"
import roadmap from "@/assets/icons/services/roadmap.svg"
import scrum from "@/assets/icons/common/database.svg"

import testPlanning from "@/assets/icons/services/test-planning.svg"
import thirdParty from "@/assets/icons/services/third-party.svg"
import typography from "@/assets/icons/services/typography.svg"
import uiDesign from "@/assets/icons/services/ui-design.svg"
import userResearch from "@/assets/services/user-research.svg"

export const images = {
    appPrototyping,
    appTesting,
    backend,
    brandGuidelines,
    brandStrategy,
    bugTracking,
    management,
    continuosImprovement,
    crossPlatform,
    customWeb,
    custom,
    ecommerce,
    enterprise,
    frontend,
    functionalUsability,
    interactivePrototyping,
    informationArchitecture,
    intuitive,
    iterative,
    legacy,
    logoDesign,
    marketing,
    nativeIOS,
    performanceSecutiry,
    regularProgress,
    requirements,
    resourceAllocation1,
    resourceAllocation2,
    responsiveDesign,
    roadmap,
    scrum,
    testPlanning,
    thirdParty,
    typography,
    uiDesign,
    userResearch,
}

export const design: ServiceListProps[] = [
    {
        title: "User Experience (UX) Design",
        services: [
            {
                title: "User Reserach and Persona Development",
                src: userResearch,
                alt: "User Research Icon",
            },
            {
                title: "Information Architecture and Wireframing",
                src: informationArchitecture,
                alt: "Information Architecture Icon",
            },
            {
                title: "Interatice Prototyping and User Testing",
                src: interactivePrototyping,
                alt: "Interactive Prototyping Icon",
            },
            {
                title: "UI Design and Visual Branding",
                src: uiDesign,
                alt: "UI Design Icon",
            },
        ],
    },
    {
        title: "User Interface (UI) Design",
        services: [
            {
                title: "Intuitive and Visually Appealing Interface Design",
                src: intuitive,
                alt: "Intuitive Icon",
            },
            {
                title: "Custtom Iconography and Illustration",
                src: custom,
                alt: "Custom Iconography Icon",
            },
            {
                title: "Typography and Color Palette Selection",
                src: typography,
                alt: "Typography Icon",
            },
            {
                title: "Responsive Design for Various Devices",
                src: responsiveDesign,
                alt: "Responsive Design Icon",
            },
        ],
    },
    {
        title: "Branding and Identity",
        services: [
            {
                title: "Logo Design and Visual Identity",
                src: logoDesign,
                alt: "Logo Design Icon",
            },
            {
                title: "Brand Strategy and Positioning",
                src: brandStrategy,
                alt: "Brand Strategy Icon",
            },
            {
                title: "Brand Guidelines and Style Guides",
                src: brandGuidelines,
                alt: "Brand Guidelines Icon",
            },
            {
                title: "Marketing Collateral and Design (Brochures, Business Cards, etc.)",
                src: marketing,
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
                src: frontend,
                alt: "Frontend Development Icon",
            },
            {
                title: "Backend Development (PHP, Python, Ruby)",
                src: backend,
                alt: "Backend Development Icon",
            },
            {
                title: "Content Management System (CMS) Development (WordPress, Drupal)",
                src: management,
                alt: "CMS Icon",
            },
            {
                title: "E-Commerce Platform Development (Magento, Shopify)",
                src: ecommerce,
                alt: "E-Commerce Icon",
            },
        ],
    },
    {
        title: "Mobile App Development",
        services: [
            {
                title: "Native iOs and Android App Development",
                src: nativeIOS,
                alt: "Operating System Icon",
            },
            {
                title: "Cross-Platform App Development (React Native, Flutter)",
                src: crossPlatform,
                alt: "Cross-Platform Icon",
            },
            {
                title: "App Prototyping and UI/UX Design Integration",
                src: appPrototyping,
                alt: "App Prototyping Icon",
            },
            {
                title: "App Testing Deployment and Maintenance",
                src: appTesting,
                alt: "App Testing Deployment Icon",
            },
        ],
    },
    {
        title: "Custom Software Development",
        services: [
            {
                title: "Enterprise Software Development",
                src: enterprise,
                alt: "Enterprise Software Icon",
            },
            {
                title: "Custom Web Application Development",
                src: customWeb,
                alt: "Custom Web App Icon",
            },
            {
                title: "Integration with Third-Party APIs and Systems",
                src: thirdParty,
                alt: "Third-Party Integration Icon",
            },
            {
                title: "Legacy System Modernization and Migration",
                src: legacy,
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
                src: requirements,
                alt: "Requirements Gathering Icon",
            },
            {
                title: "Project Roadmap and Timeline Development",
                src: roadmap,
                alt: "",
            },
            {
                title: "Resource Allocation and Task Assignment",
                src: resourceAllocation1,
                alt: "",
            },
            {
                title: "Resouce Allocation and Task Assignment",
                src: resourceAllocation2,
                alt: "",
            },
        ],
    },
    {
        title: "Agile Development",
        services: [
            {
                title: "Iterative Development and Sprints",
                src: iterative,
                alt: "",
            },
            {
                title: "Scrum or Kanban Methodology Implementation",
                src: scrum,
                alt: "",
            },
            {
                title: "Regular Progress Updates and Demos",
                src: regularProgress,
                alt: "",
            },
            {
                title: "Continuos Improvements and Feedback Incorporation",
                src: continuosImprovement,
                alt: "",
            },
        ],
    },
    {
        title: "Quality Assurance and Testing",
        services: [
            {
                title: "Test Planing and Execution",
                src: testPlanning,
                alt: "",
            },
            {
                title: "Functional and Usability Testing",
                src: functionalUsability,
                alt: "",
            },
            {
                title: "Performance and Security Testing",
                src: performanceSecutiry,
                alt: "",
            },
            {
                title: "Bug Tracking and Issue Resolution",
                src: bugTracking,
                alt: "",
            },
        ],
    },
]
