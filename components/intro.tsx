"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="data:image/jpeg;base64,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"
              alt="Surendar portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-black shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi, I'm Surendar.</span> I'm{" "}
        <span className="font-bold">a budding full-stack developer</span> with{" "}
        <span className="font-bold">a passion for crafting stunning web </span>experiences. Proficient in
        building <span className="italic font-bold">React (Next.js).</span>. I love transforming ideas into interactive sites and apps.{" "}
        <span className="italic font-bold"> Let's bring your vision to life together !</span>🌟👨‍💻🔥.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/surendar-c/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Ncsurendar"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
