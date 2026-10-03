"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating from CIT in{" "}
        <span className="font-medium">Communication Engineering</span>, I joined
        Technoturf Info Services to pursue my passion for programming. I have
        worked on <span className="font-medium">Moodle and Totara LMS</span> platforms for various
        clients like{" "}
        <span className="font-medium">Capgemini, Accenture, CTS</span> and others.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          Moodle, Totara, PHP, JavaScript, MySQL, React and Zoho CRM
        </span>
        . I am always looking to learn new technologies. I am currently working
        as a <span className="font-medium">Senior PHP Developer</span> at
        ILEARNME LLP, leading a team that builds multi-tenant LMS platforms.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy doing
        Organic Farming and cooking and playing badminton. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning <span className="font-medium">React and Next.js</span>.
      </p>
    </motion.section>
  );
}
