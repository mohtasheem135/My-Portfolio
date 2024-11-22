"use client";

import React from "react";
import { FaReact, FaNodeJs, FaJava, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiRender,
  SiEclipseide,
  SiRedux,
  SiLinuxmint,
} from "react-icons/si";
import { BiLogoSpringBoot, BiLogoNetlify } from "react-icons/bi";
import { FaGitlab } from "react-icons/fa6";
import {
  IoLogoFirebase,
  IoLogoJavascript,
  IoLogoVercel,
} from "react-icons/io5";
import { DiHeroku } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import ToolIcon from "../Design/ToolIcon";
import LeetCodeStats from "./LeetCodeStats";
import { Playfair_Display } from "next/font/google";
import { Source_Sans_3 } from "next/font/google";


const playfair = Playfair_Display({ subsets: ["latin"], style: "normal" });
const source_sans = Source_Sans_3({ subsets: ["latin"], style: "normal" });

const Skills = () => {
  const FrontendToolData = [
    // Frontend
    { IconComponent: RiNextjsFill, label: "Next.js", color: "#000000" },
    { IconComponent: FaReact, label: "React.js", color: "#61DBFB" },
    { IconComponent: SiRedux, label: "Redux", color: "#764abc" },
    {
      IconComponent: TbBrandFramerMotion,
      label: "Framer Motion",
      color: "#e83a59",
    },
    {
      IconComponent: RiTailwindCssFill,
      label: "Tailwind CSS",
      color: "#3399ff",
    },
    // Backend
    { IconComponent: FaNodeJs, label: "Node.js", color: "#68A063" },
    { IconComponent: SiExpress, label: "Express.js", color: "#000000" },
    { IconComponent: BiLogoSpringBoot, label: "Spring Boot", color: "#6DB33F" },
    // Database
    { IconComponent: SiMongodb, label: "MongoDB", color: "#47A248" },
    { IconComponent: SiMysql, label: "MySQL", color: "#00758F" },
    { IconComponent: IoLogoFirebase, label: "Firebase", color: "#FFCA28" },
    // Language
    { IconComponent: FaJava, label: "Java", color: "#5382a1" },
    { IconComponent: IoLogoJavascript, label: "Javascript", color: "#F0DB4F" },
    // Deployment
    { IconComponent: IoLogoVercel, label: "Vercel", color: "#000000" },
    { IconComponent: BiLogoNetlify, label: "Netlify", color: "#00C7B7" },
    { IconComponent: DiHeroku, label: "Heroku", color: "#430098" },
    { IconComponent: SiRender, label: "Render", color: "#000000" },
    // IDE
    { IconComponent: VscVscode, label: "VS Code", color: "#007ACC" },
    { IconComponent: SiEclipseide, label: "Eclipse", color: "#2C2255" },
    // OS
    { IconComponent: SiLinuxmint, label: "Linux Mint", color: "#3EB489" },
    // Version Controll tools
    { IconComponent: FaGitAlt, label: "Git", color: "#F1502F" },
    { IconComponent: FaGitlab, label: "GitLab", color: "#E2432A" },
    { IconComponent: FaGithub, label: "Github", color: "#00000" },
    // Design
    { IconComponent: FaFigma, label: "Figma", color: "#FF4B33" },

  ];

  return (
    <div className={source_sans.className}>
      <div className="flex justify-center items-center mt-[30px] sm:mt-[50px] px-[20px] sm:px-[0px]">
        <h1
          className={`${playfair.className} bg-clip-text text-transparent text-[25px] sm:text-[35px] font-bold bg-gradient-to-br from-[#608BC1] to-[#22177A]`}
        >
          Tech Stack & Coding Milestones
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row mb-[50px] mt-[30px] sm:mt-[50px] sm:px-[100px]">
        <div className="flex flex-wrap sm:w-1/2">
          {FrontendToolData.map((tool, index) => (
            <ToolIcon
              key={index}
              IconComponent={tool.IconComponent}
              label={tool.label}
              color={tool.color}
            />
          ))}
        </div>
        <div className="sm:w-1/2 mt-[50px] sm:mt-0">
          <div className="flex justify-center">
            <p1
              className={`${source_sans.className} text-[25px] bg-clip-text text-transparent bg-gradient-to-br from-[#608BC1] to-[#22177A]`}
            >
              Leetcode Profile
            </p1>
          </div>
          <LeetCodeStats />
        </div>
      </div>
    </div>
  );
};

export default Skills;
