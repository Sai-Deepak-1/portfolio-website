"use client";

import Particles from "@/components/ui/particles";
import TextReveal from "@/components/ui/text-reveal";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import SkillsShowcase from "@/components/layout/skills/skills-showcase";
import ProjectShowcase from "@/components/layout/projects/project-showcase";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";

export default function Home() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div>
      <main className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-white via-gray-200/20 to-white dark:from-black dark:via-zinc-800/20 dark:to-black">
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={500}
          ease={80}
          color={color}
        />
        <h1 className="z-10 text-4xl text-transparent duration-1000 bg-zinc-600 dark:bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          Sai Deepak
        </h1>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      </main>
      <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg">
        <TextReveal
          text="I am Currently learning
          Machine Learning, AWS, Next.js, Spring Boot."
          />
      </div>
      <SkillsShowcase skills={SKILLS_DATA} />
      <ProjectShowcase projects={PROJECT_SHOWCASE} />
    </div>
  );
}
