import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Cisco AICTE Virtual Internship",
    location: "Chennai,",
    description:
      "The AICTE Cisco Virtual Internship was a valuable opportunity for me to gain finance experience at Cisco through a digital skilling.",
    icon: React.createElement(CgWorkAlt),
    date: "MAY 2022 - JUN 2022",
  },
  {
    title: "Web Application Development Intern",
    location: "OG Software Solutions, Chennai,",
    description:
      "I created a React-based portfolio, showcasing my skills and experiences with user-friendly design, utilizing React hooks, components, and routing for a seamless user interface. Gained Experience working on framer motions.",
    icon: React.createElement(CgWorkAlt),
    date: "JUL 2022 - AUG 2022",
  },
  {
    title: "Web Application Development Intern",
    location: "MNMarketzy Solutions, Chennai,",
    description:
      "I collaborated with a team to develop a web app using the MERN stack, implementing robust authentication and authorization for secure resource access.",
    icon: React.createElement(FaReact),
    date: "MAR 2023 - APR 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Promptopia",
    description:
      "Experience the power of Next.js in our Note sharing web application.Enjoy server-side rendering, effortless routing, API integration, making it a popular choice for my project",
    tags: ["Next-Auth", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Car Hub",
    description:
      "Discover the freedom of my car hub, the ultimate car rental platform. Browse, book, and hit the road with ease, unlocking unforgettable adventures.",
    tags: ["TypeScript", "Next.js", "Tailwind"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Smart Indoor Navigation",
    description:
      "Seamlessly navigate complex spaces using augmented reality, empowering efficient and intuitive exploration like never before.",
    tags: ["Augmented Reality", "Unity 3D", "Navmesh"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Node.js",
  "Express",
  "Next.js",
  "MongoDB",
  "MySQL",
  "Git",
  "C",
  "Cpp",
  "Python",
  "Java",
  "Tailwind",
  "Framer Motion",
  "Machine Learning",
  "Unity 3D",
  "PowerBI",
] as const;
