import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cicmImg from "@/public/cicm_dashboard.jpeg";
import itrackImg from "@/public/itrack.png";
import tekstacImg from "@/public/tekstac_2018.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior PHP Developer",
    company: "ILEARNME LLP",
    location: "India (Remote)",
    description:
      "I lead a team of 5 engineers managing Dubai LMS platforms. I architected a multi-tenant LMS supporting over 50,000 active users, built the API integration between the LMS and the mobile app (cutting data sync time by 40%), and deployed face recognition for exam proctoring, improving accuracy by 25%.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2024 - Present",
  },
  {
    title: "Lead Moodle Developer",
    company: "Integrass Solutions",
    location: "Trichy, TN (Remote)",
    description:
      "I led a team of 3 administering LMS platforms for clients in the USA. I implemented secure SSO from the MMS system to the LMS (10,000+ daily authentications) and architected a multi-tenant setup that lowered cloud hosting costs by 30%.",
    icon: React.createElement(FaReact),
    date: "Dec 2023 - Jul 2024",
  },
  {
    title: "Senior Software Engineer",
    company: "Elumina Elearning",
    location: "Chennai, TN",
    description:
      "I led 15 team members to deliver CICM Project Phase A and Phase B to production, integrating Moodle LMS and the CICM Portal with Zoho CRM, Azure Active Directory and Assessapp. I also migrated 4,000+ users from the legacy portal to Zoho CRM and Assessapp, and upgraded Moodle 3.6 to 3.9 for ACD and RANZCO.",
    icon: React.createElement(LuGraduationCap),
    date: "Jun 2020 - Jun 2023",
  },
  {
    title: "Senior Software Engineer",
    company: "Transneuron Technology",
    location: "Bangalore, KA",
    description:
      "I worked on building the iTrack product using Moodle LMS with features like a course marketplace with payment gateway integration (over $100K in transactions), a mentor-mentee module, a VPL jail execution server and course completion reports for 10,000+ learners.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2019 - Jun 2020",
  },
  {
    title: "Product Developer",
    company: "Technoturf Info Services",
    location: "Coimbatore, TN",
    description:
      "I worked on Moodle LMS for various clients like Capgemini, Accenture, CTS and etc. Developed various features like helpdesk plugin, Secure quiz option, Virtual Programming lab setup and Gamification in Levelup plugin.",
    icon: React.createElement(FaReact),
    date: "May 2015 - Jan 2019",
  },
] as const;

export const projectsData = [
  {
    title: "CICM MDP Portal",
    description:
      "I have lead the CICM MDP Portal project which integrated Moodle with Zoho CRM, WordPress and Assessapp Product which took 1.5 years to complete.",
    tags: ["Moodle", "Zoho CRM", "WordPress", "Assessapp"],
    imageUrl: cicmImg,
  },
  {
    title: "iTrack Platform",
    description:
      "I worked on Building iTrack Product using Moodle LMS with various features like Course Ecommerce, Payment gateway integration, Mentor Mentee concept, Job portal etc.",
    tags: ["Moodle", "PHP", "Javascript", "Mysql", "AJAX"],
    imageUrl: itrackImg,
  },
  {
    title: "Tekstac Platform",
    description:
      " Developed various features like helpdesk plugin, Secure quiz option, Virtual Programming lab setup and Gamification in Levelup plugin.",
    tags: ["Moodle", "PHP", "Javascript", "PostgreSQL", "AJAX"],
    imageUrl: tekstacImg,
  },
] as const;

export const skillsData = [
  "Project Management",
  "Client Handling",
  "API",
  "Moodle",
  "Php",
  "JavaScript",
  "Mysql",
  "Core Java",
  "Zoho CRM",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "TypeScript",
  "SSO",
  "Azure Active Directory",
  "Multi-tenant Architecture",
] as const;
