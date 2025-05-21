import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import lrdsImg from "@/public/lrds.png";
import nndsImg from "@/public/nnds.png";
import busmonitorImg from "@/public/busmonitor-post.png";
import trafficinsightImg from "@/public/traffic_insight.png";

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
    hash: "#experiences",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Traffic Insight",
    link: "#",
    description:
      "Developed a traffic aware computer vision system to detect and track vehicle junction usage. Fine-tuned YOLO11 model for better aerial vehicle detection.",
    image: trafficinsightImg,
    tags: ["Pytorch", "OpenCV", "Computer Vision", "Transportation"],
  },
  {
    title: "LR-DS",
    link: "https://www.sciencedirect.com/science/article/pii/S095070512100383X",
    description:
      "Developed a feature selection technique for binary classifiers using epistemic uncertainty.",
    image: lrdsImg,
    tags: ["Pytorch", "Classification", "Feature Selection", "Uncertainty"],
  },
  {
    title: "NN-DS",
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
    link: "https://www.linkedin.com/pulse/data-driven-comfort-busmonitors-role-redefining-public-transportation-znpue",
    description:
      "Created an embedded IoT system from scratch to gather and predict transportation environment data.",
    image: busmonitorImg,
    tags: ["Embedded", "C", "Hardware", "Django", "Pytorch"],
  },
] as const;

export const experiencesData = [
  {
    title: "Research Assistant",
    company: "Loughborough University",
    description:
      "Assisting in researching scalable micro-data cluster usages for web services. Experimented with web page serving time and data caching, utilising both Docker containerised, and bare-metal services.",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Doctoral Researcher",
    company: "Loughborough University",
    description:
      "I started my doctorate programme in 2019, with the aim to research in the machine learning and network security domains.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2022",
  },
  {
    title: "Technical Product Manager",
    company: "Vectare Ltd",
    description:
      "I worked as a Technical Product Manager, developing embedded devices and integrating with a Django system for machine learning model creation.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
  {
    title: "Machine Learning Researcher",
    company: "Loughborough University",
    description:
      "Working for Loughborough University, researching utilising Graph Neural Networks in the Beyond 5G networking field - specifically in network slicing.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - 2025",
  },
  {
    title: "Lead AI Engineer",
    company: "TransHumanity",
    description:
      "Leading the AI/ML team in developing a multi-agentic AI and machine learning application for transportation for local authorities.",
    icon: React.createElement(CgWorkAlt),
    date: "2025 - Present",
  },
] as const;

export const skillsData = [
  "Machine Learning",
  "Python",
  "Pytorch",
  "Torch Geometric",
  "Sci-kit Learn",
  "Django",
  "HTML",
  "CSS",
  "PHP",
  "C",
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Framer Motion",
  "Git",
  "Docker",
  "Tailwind",
  "PostgreSQL",
  "Embedded Development",
  "Hardware Engineering",
] as const;
