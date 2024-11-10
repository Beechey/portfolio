import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./ui/SectionHeading";

export default function About() {
  return (
    <motion.section
      id="about"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-32"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}>
      <SectionHeading>About me</SectionHeading>
      <p className="text-md sm:text-xl">
        I am a <span className="font-bold">collaborative</span> and driven
        machine learning engineer with a strong foundation in technical skills,
        as well as research and product management. After earning my PhD from{" "}
        <span className="font-bold">Loughborough University</span>, where my
        research on evidential classification in network security led to
        <span className="font-bold"> high-impact publications</span>, I gained
        experience in machine learning areas such as neural networks and
        time-series forecasting. My recent role as a Technical Product Owner for
        an IoT project allowed me to{" "}
        <span className="font-bold">lead embedded engineering innovations</span>{" "}
        for public transport, utilising my skills in hardware design, machine
        learning, and stakeholder engagement to improve passenger experience.
        <br />
        <br />
        In addition to technical expertise, I have completed{" "}
        <span className="underline">advanced training</span> in{" "}
        <span className="font-bold">leadership</span>,{" "}
        <span className="font-bold">strategic innovation</span>, and{" "}
        <span className="font-bold">project management</span>, which complement
        my proficiency in cloud computing, embedded systems, and programming
        languages like Python and C. I am known for a{" "}
        <span className="underline">hands-on approach</span> to problem-solving
        and continue to contribute to{" "}
        <span className="font-bold">cutting-edge</span> research in Beyond 5G
        networks, presenting my work at industry conferences and expanding my
        impact across both academic and commercial domains.
      </p>
    </motion.section>
  );
}
