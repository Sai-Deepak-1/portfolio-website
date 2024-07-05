import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaJava, FaPython, FaGitAlt, FaAws, FaWindows, FaLinux } from "react-icons/fa";
import { SiSpring, SiSpringboot, SiFlask, SiPostgresql, SiMongodb, SiNextdotjs } from "react-icons/si";
import MotionDiv from "@/components/ui/motion-div";
import MotionList from "@/components/ui/motion-list";
import { IconType } from "react-icons";

type Skill = {
  name: string;
  icon: IconType;
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

export default function Skills() {
  return (
    <section id="skills" className="flex w-full flex-col items-center text-center">
      <MotionDiv>
        <h2 className="mb-4">My Skills</h2>
      </MotionDiv>
      <div className="flex flex-wrap justify-center">
        {SKILLS_DATA.map((item, index) => (
          <MotionDiv key={index}>
            <div className="mb-6 md:px-2">
              <h2>{item.sectionName}</h2>
              <MotionList className="flex flex-wrap gap-0 md:gap-5 md:px-6 lg:justify-center">
                {item.skills.map((skill) => (
                  <SkillCard key={skill.name} icon={skill.icon} name={skill.name} />
                ))}
              </MotionList>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}

type SkillCardProps = {
  icon: IconType;
  name: string;
};

function SkillCard({ icon: Icon, name }: SkillCardProps) {
  return (
    <div className="group rounded-xl border-none p-5 text-center shadow-none transition-all duration-200 ease-linear hover:scale-110 hover:drop-shadow-xl">
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-16 w-16 items-center justify-center">
          <Icon className="h-6 w-6"/>
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
}