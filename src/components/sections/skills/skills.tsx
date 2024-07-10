import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaJava, FaPython, FaGitAlt, FaAws, FaWindows, FaLinux } from "react-icons/fa";
import { SiSpring, SiSpringboot, SiFlask, SiPostgresql, SiMongodb, SiNextdotjs, SiFastapi } from "react-icons/si";
import MotionDiv from "@/components/ui/motion-div";
import MotionList from "@/components/ui/motion-list";
import { IconType } from "react-icons";

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
  return (
    <section id="skills" className="container py-12 sm:py-16 md:py-24 lg:py-32">
      <MotionDiv>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 md:mb-16">My Skills</h1>
      </MotionDiv>
      <div className="grid gap-8 sm:gap-12">
        {SKILLS_DATA.map((item, index) => (
          <MotionDiv key={index}>
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">{item.sectionName}</h3>
              <MotionList className="flex flex-wrap justify-center gap-4 sm:gap-6">
                {item.skills.map((skill) => (
                  <SkillCard key={skill.name} icon={skill.icon} name={skill.name} gradient={skill.gradient} />
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
  gradient: string;
};

function SkillCard({ icon: Icon, name, gradient }: SkillCardProps) {
  return (
    <div className="group relative rounded-xl border-none p-3 sm:p-4 text-center shadow-none transition-all duration-200 ease-linear hover:scale-110 hover:drop-shadow-xl">
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center relative">
          <Icon className="h-5 w-5 sm:h-6 sm:w-6 z-10"/>
          <div className={`pointer-events-none absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r ${gradient} opacity-50 blur-[5px] filter transition-all duration-200 ease-linear group-hover:blur-[10px]`}></div>
        </div>
        <p className="text-sm sm:text-base">{name}</p>
      </div>
    </div>
  );
}