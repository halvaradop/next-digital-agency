import { CardIndexProps, CardProps } from "@/lib/@types/props"
import uiDesigner from "@/assets/services/intuitive.svg"
import uxDesigner from "@/assets/services/information-architecture.svg"
import designHead from "@/assets/careers/design-head.svg"
import frontend from "@/assets/services/frontend.svg"
import backend from "@/assets/services/backend.svg"
import fullStack from "@/assets/services/content-management.svg"
import baManager from "@/assets/services/regular-progress.svg"
import projectManager from "@/assets/services/scrum.svg"
import hrManager from "@/assets/careers/hr-manager.svg"
import qaTester from "@/assets/services/bug-tracking.svg"
import sqlTester from "@/assets/services/performance-security.svg"
import ManualTester from "@/assets/services/functional-usability.svg"

export const careersWelcome: CardIndexProps[] = [
    {
        title: "Innovative and Impactful Projects",
        description:
            "At SquareUp, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference.",
    },
    {
        title: "Supportive Environment",
        description:
            "At SquareUp, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference.",
    },
    {
        title: "Continuous Learning and Growth",
        description:
            "We believe in investing in our team's growth and development. We provide opportunities for continuous learning, whether it's through workshops, training programs, or attending industry conferences. At SquareUp, you'll have the chance to expand your skill set and stay up-to-date with the latest trends and technologies.",
    },
    {
        title: "Challenging and Rewarding Work",
        description:
            "Our projects are challenging, but the rewards are even greater. We tackle complex problems and push ourselves to deliver innovative solutions. You'll be empowered to take ownership of your work, make a real impact, and see your ideas come to life.",
    },
]

export const careersDesignJob: CardProps[] = [
    {
        title: "UI Designer",
        description:
            "Bring your creativity and expertise to our team as a UI Designer. Collaborate with cross-functional teams to design visually stunning and user-friendly interfaces. Utilize your skills in layout design, typography, and color theory to create engaging digital experiences that leave a lasting impression.",
        src: uiDesigner,
        alt: "UI Designer Icon",
        button: "Apply Now",
    },
    {
        title: "UX Designer",
        description:
            "Join us as a UX Designer and help shape exceptional user experiences. Conduct user research, analyze data, and create wireframes and prototypes to design intuitive and user-centric interfaces. Collaborate closely with UI Designers, developers, and stakeholders to ensure seamless and enjoyable user journeys.",
        src: uxDesigner,
        alt: "UX Designer Icon",
        button: "Apply Now",
    },
    {
        title: "Design Head",
        description:
            "Lead our design team as a Design Head and drive the creative vision of our products. Provide strategic direction, mentorship, and guidance to UI and UX designers. Collaborate with cross-functional teams to ensure design consistency and elevate our brand identity through innovative and visually impactful designs.",
        src: designHead,
        alt: "Design Head Icon",
        button: "Apply Now",
    },
]

export const careersDevelopmentJob: CardProps[] = [
    {
        title: "Front - End Developer",
        description:
            "Join our team as a Front-End Developer and bring our designs to life. Transform UI/UX wireframes into interactive web interfaces using HTML, CSS, and JavaScript. Collaborate closely with designers and back-end developers to ensure seamless integration and optimal user experiences.",
        src: frontend,
        alt: "Frontend Developer Icon",
        button: "Apply Now",
    },
    {
        title: "Back - End  Developer",
        description:
            "Be part of our team as a Backend Developer and contribute to building robust and scalable web applications. Develop server-side logic, integrate databases, and optimize system performance. Collaborate with front-end developers to ensure smooth communication between the server and the user interface.",
        src: backend,
        alt: "Backend Developer Icon",
        button: "Apply Now",
    },
    {
        title: "Full Stack Developer",
        description:
            "Join us as a Full Stack Developer and take on end-to-end responsibility for web application development. Combine your skills in both front-end and back-end technologies to create dynamic and responsive websites. Collaborate with designers, developers, and stakeholders to deliver comprehensive and user-friendly solutions.",
        src: fullStack,
        alt: "Full Stack Developer Icon",
        button: "Apply Now",
    },
]

export const careersManagementJob: CardProps[] = [
    {
        title: "BA Manager",
        description:
            "Lead our business analysis team as a BA Manager and drive strategic initiatives. Gather and analyze requirements, facilitate communication between stakeholders, and ensure project alignment with business objectives. Provide leadership and mentorship to a team of talented business analysts.",
        src: baManager,
        alt: "BA Manager Icon",
        button: "Apply Now",
    },
    {
        title: "Project Manager",
        description:
            "Join our team as a Project Manager and oversee the successful delivery of projects from initiation to completion. Define project scope, manage timelines and resources, and ensure effective communication across cross-functional teams. Utilize your leadership and organizational skills to drive project success.",
        src: projectManager,
        alt: "Project Manager Icon",
        button: "Apply Now",
    },
    {
        title: "HR Manager",
        description:
            "Be part of our team as an HR Manager and play a vital role in managing our human resources. Lead talent acquisition, employee engagement, and performance management initiatives. Collaborate with leadership to develop and implement HR strategies that foster a positive and inclusive work culture.",
        src: hrManager,
        alt: "HR Manager Icon",
        button: "Apply Now",
    },
]

export const careersQaJob: CardProps[] = [
    {
        title: "QA Tester",
        description:
            "Ensure the quality of our software products as a QA Tester. Develop test plans, execute test cases, and identify and report software defects. Collaborate with developers and stakeholders to ensure that our products meet high-quality standards and deliver an exceptional user experience.",
        src: qaTester,
        alt: "QA Tester Icon",
        button: "Apply Now",
    },
    {
        title: "SQL Tester",
        description:
            "Join us as an SQL Tester and play a key role in testing and validating the integrity of our databases. Write complex SQL queries to perform data validation and identify any anomalies. Collaborate with developers and QA testers to ensure the accuracy and reliability of our data.",
        src: sqlTester,
        alt: "SQL Tester Icon",
        button: "Apply Now",
    },
    {
        title: "Manual Tester",
        description:
            "Be part of our team as a Manual Tester and perform comprehensive manual testing to ensure the quality and functionality of our software applications. Develop test cases, execute test scripts, and document test results. Collaborate with developers and QA testers to troubleshoot issues and enhance software performance.",
        src: ManualTester,
        alt: "Manual Tester Icon",
        button: "Apply Now",
    },
]
