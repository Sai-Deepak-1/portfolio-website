import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaAws,
  FaWindows,
  FaLinux,
} from "react-icons/fa";
import { SiSpring, SiSpringboot, SiFlask, SiPostgresql, SiMongodb, SiNextdotjs } from "react-icons/si";
import { type SkillsShowcaseProps } from "@/components/layout/skills/skills-showcase";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Front End",
    skills: [
      {
        name: "HTML",
        icon: FaHtml5,
      },
      {
        name: "CSS",
        icon: FaCss3Alt,
      },
      {
        name: "JavaScript",
        icon: FaJsSquare,
      },
      {
        name: "React.js",
        icon: FaReact,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
    ],
  },
  {
    sectionName: "Back End",
    skills: [
      {
        name: "Spring",
        icon: SiSpring,
      },
      {
        name: "Spring Boot",
        icon: SiSpringboot,
      },
      {
        name: "Node.js",
        icon: FaNodeJs,
      },
      {
        name: "Flask Web Framework",
        icon: SiFlask,
      },
    ],
  },
  {
    sectionName: "Programming Languages",
    skills: [
      {
        name: "Java",
        icon: FaJava,
      },
      {
        name: "Python",
        icon: FaPython,
      },
    ],
  },
  {
    sectionName: "Database",
    skills: [
      {
        name: "SQL",
        icon: SiPostgresql,
      },
      {
        name: "NoSQL (MongoDB)",
        icon: SiMongodb,
      },
    ],
  },
  {
    sectionName: "Version Control",
    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
      },
    ],
  },
  {
    sectionName: "Cloud",
    skills: [
      {
        name: "AWS",
        icon: FaAws,
      },
    ],
  },
  {
    sectionName: "OS",
    skills: [
      {
        name: "Windows",
        icon: FaWindows,
      },
      {
        name: "Linux",
        icon: FaLinux,
      },
    ],
  },
];
