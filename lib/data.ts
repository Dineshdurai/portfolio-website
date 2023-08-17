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
    title: "Senior Software Developer",
    company: "Elumina Elearning",
    location: "Chennai, TN",
    description:
      "I have upgraded Moodle3.6 to Moodle3.9 for ACD and RANZCO. I have also lead the CICM MDP Portal project which integrated Moodle with Zoho CRM, Wordpress and Assessapp Product.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 -2023",
  },
  {
    title: "Senior Software Developer",
    company: "Transneuron Technology",
    location: "Bangalore, KA",
    description:
      "I worked on Building iTrack Product using Moodle LMS with varies features like Course Ecommerce, Payment gateway integration, Mentor Mentee concept, Job portal etc.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "Product Developer",
    company: "Technoturf Info Services",
    location: "Coimbatore, TN",
    description:
      "I worked on Moodle LMS for varies clients like Capgemini, Assesnture, CTS and etc. Developed varies features like helpdesk plugin, Secure quiz option, Virtual Programming lab setup and Gamification in Levelup plugin.",
    icon: React.createElement(FaReact),
    date: "2015 - 2019",
  },
] as const;

export const projectsData = [
  {
    title: "CICM MDP Portal",
    description:
      "I have lead the CICM MDP Portal project which integrated Moodle with Zoho CRM, Wordpress and Assessapp Product which took 1.5 years to complete.",
    tags: ["Moodle", "Zoho CRM", "Wordpress", "Assessapp"],
    imageUrl: cicmImg,
  },
  {
    title: "iTrack Platform",
    description:
      "I worked on Building iTrack Product using Moodle LMS with varies features like Course Ecommerce, Payment gateway integration, Mentor Mentee concept, Job portal etc.",
    tags: ["Moodle", "PHP", "Javascript", "Mysql", "AJAX"],
    imageUrl: itrackImg,
  },
  {
    title: "Tekstac Platform",
    description:
      " Developed varies features like helpdesk plugin, Secure quiz option, Virtual Programming lab setup and Gamification in Levelup plugin.",
    tags: ["Moodle", "PHP", "Javascript", "PostgresSQL", "AJAX"],
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
] as const;
