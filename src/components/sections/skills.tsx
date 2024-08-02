"use client"

import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaJava, FaPython, FaGitAlt, FaAws, FaWindows, FaLinux } from "react-icons/fa";
import { SiSpring, SiSpringboot, SiFlask, SiPostgresql, SiMongodb, SiNextdotjs, SiFastapi } from "react-icons/si";
import { IconType } from "react-icons";
import { HoverEffect } from "@/components/ui/card-hover-effect";

// ... (SKILLS_DATA remains unchanged)
type Skill = {
  name: string;
  icon: IconType;
  gradient: string;
};

type SkillSection = {
  sectionName: string;
  skills: Skill[];
};

type SkillsShowcaseProps = {
  skills: SkillSection[];
};

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Programming Languages",
    skills: [
      {
        name: "Java",
        icon: FaJava,
        gradient: "from-orange-500 via-orange-600 to-orange-700",
      },
      {
        name: "Python",
        icon: FaPython,
        gradient: "from-blue-400 via-blue-500 to-blue-600",
      },
    ],
  },
  {
    sectionName: "Front End",
    skills: [
      {
        name: "HTML",
        icon: FaHtml5,
        gradient: "from-red-500 via-red-600 to-red-700",
      },
      {
        name: "CSS",
        icon: FaCss3Alt,
        gradient: "from-blue-500 via-blue-600 to-blue-700",
      },
      {
        name: "JavaScript",
        icon: FaJsSquare,
        gradient: "from-yellow-500 via-yellow-600 to-yellow-700",
      },
      {
        name: "React.js",
        icon: FaReact,
        gradient: "from-cyan-500 via-cyan-600 to-cyan-700",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        gradient: "from-gray-700 via-gray-800 to-gray-900",
      },
    ],
  },
  {
    sectionName: "Back End",
    skills: [
      {
        name: "Spring",
        icon: SiSpring,
        gradient: "from-green-500 via-green-600 to-green-700",
      },
      {
        name: "Spring Boot",
        icon: SiSpringboot,
        gradient: "from-green-600 via-green-700 to-green-800",
      },
      {
        name: "Node.js",
        icon: FaNodeJs,
        gradient: "from-green-400 via-green-500 to-green-600",
      },
      {
        name: "Flask",
        icon: SiFlask,
        gradient: "from-gray-400 via-gray-500 to-gray-600",
      },
      {
        name: "FastAPI",
        icon: SiFastapi,
        gradient: "from-green-500 via-teal-600 to-green-700",
      },
    ],
  },
  {
    sectionName: "Database",
    skills: [
      {
        name: "SQL",
        icon: SiPostgresql,
        gradient: "from-blue-400 via-blue-500 to-blue-600",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        gradient: "from-green-500 via-green-600 to-green-700",
      },
    ],
  },
  {
    sectionName: "Tools and Environment",
    skills: [
      {
        name: "AWS",
        icon: FaAws,
        gradient: "from-orange-400 via-orange-500 to-orange-600",
      },
      {
        name: "Git",
        icon: FaGitAlt,
        gradient: "from-red-500 via-red-600 to-red-700",
      },
      {
        name: "Windows",
        icon: FaWindows,
        gradient: "from-blue-500 via-blue-600 to-blue-700",
      },
      {
        name: "Linux",
        icon: FaLinux,
        gradient: "from-yellow-500 via-yellow-600 to-yellow-700",
      },
    ],
  },
];
export default function Skills() {
  const transformedItems = SKILLS_DATA.flatMap((section) =>
    section.skills.map((skill) => ({
      text: skill.name,
      Icon: skill.icon,
    }))
  );

  return (
    <section id="skills" className="container py-12 sm:py-16 md:py-24 lg:py-32">
      <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
      <div className="max-w-4xl mx-auto px-4">
        <HoverEffect items={transformedItems} />
      </div>
    </section>
  );
}