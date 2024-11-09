import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import lrdsImg from "@/public/lrds.png";
import nndsImg from "@/public/nnds.png";
import busmonitorImg from "@/public/busmonitor.png";

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

export const projectsData = [
  {
    title: "LR-DS",
    company: "Loughborough University",
    year: "2021",
    link: "https://www.sciencedirect.com/science/article/pii/S095070512100383X",
    description:
      "Developed a feature selection technique for binary classifiers using epistemic uncertainty.",
    image: lrdsImg,
    tags: ["Pytorch", "Classification", "Feature Selection", "Uncertainty"],
  },
  {
    title: "NN-DS",
    company: "Loughborough University",
    year: "2023",
    link: "https://www.sciencedirect.com/science/article/pii/S1566253522002342",
    description:
      "Designed a technique to defend against adversarial machine learning attacks using epistemic uncertainty.",
    image: nndsImg,
    tags: [
      "Pytorch",
      "Classification",
      "Adversarial Machine Learning",
      "Uncertainty",
    ],
  },
  {
    title: "BusMONITOR",
    company: "Vectare Ltd",
    year: "2024",
    link: "https://www.linkedin.com/pulse/data-driven-comfort-busmonitors-role-redefining-public-transportation-znpue",
    description:
      "An embedded IoT system to gather and predict transportation environment data.",
    image: busmonitorImg,
    tags: ["Embedded", "C", "Hardware", "Django", "Pytorch"],
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "PHP",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Framer Motion",
  "Git",
  "Tailwind",
  "PostgreSQL",
  "Python",
  "Django",
  "Pytorch",
  "Torch Geometric",
] as const;
