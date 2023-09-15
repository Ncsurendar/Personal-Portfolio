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
        I'm a passionate and adaptable{" "}
        <span className="font-medium"> software developer</span>, with a strong foundation in TypeScript and JavaScript.  My expertise lies in crafting robust web applications {" "}
        <span className="font-medium">using a tech stack that includes React, Next.js, Node.js, and MongoDB.</span>.{" "}
        <span className="italic"> I thrive on tackling complex challenges and collaborating closely with clients to transform their visions into efficient, scalable, and user-friendly solutions.</span>
         As a quick learner, <span className="bold">I stay at the forefront of emerging technologies to ensure that the solutions I build are always cutting-edge. </span>
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new technologies</span>. I am currently
        learning about{" "}
        <span className="font-medium">Devops & Machine Learning</span>. Apart from that i love playing Chess.
      </p>
    </motion.section>
  );
}
