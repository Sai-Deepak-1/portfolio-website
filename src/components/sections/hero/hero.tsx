"use client";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/content";
import Image from "next/image";
import TextScramble from "@/components/ui/TextScramble";
import MotionDiv from "@/components/ui/motion-div";
import CoolPortraitCard from "@/components/ui/cool-potrait-card";

export default function Hero() {
  return (
    <div className="container py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        <div className="text-center md:text-left">
          <h1 className="scroll-m-20 text-3xl sm:text-4xl font-extrabold tracking-tight lg:text-5xl mb-2">
            Hello there! 👋😎,
          </h1>
          <h1 className="scroll-m-20 text-3xl sm:text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
            I&apos;m <TextScramble text={DATA.name} />
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6">
            {DATA.bio}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              variant="gooeyLeft"
              size="lg"
              asChild
              className="w-full sm:w-auto"
            >
              <a href="/resume">Download Resume</a>
            </Button>
            <Button
              variant="expandIcon"
              Icon={ArrowRightIcon}
              size="lg"
              iconPlacement="right"
              asChild
              className="w-full sm:w-auto"
            >
              <a href="#ContactMe">Contact Me</a>
            </Button>
          </div>
        </div>

        <div className="mt-8 md:mt-0">
          <MotionDiv delayOffset={0.4}>
            <CoolPortraitCard className="hidden lg:block">
              <Image
                src="/assets/coding-1.svg"
                alt="photo"
                width={1000}
                height={750}
                className="transition-all"
              />
            </CoolPortraitCard>
          </MotionDiv>
          <MotionDiv delayOffset={0.4}>
            <Image
              src="/assets/coding-1.svg"
              alt="photo"
              width={1000}
              height={750}
              className="transition-all hover:rotate-3 hover:scale-105 lg:hidden"
            />
          </MotionDiv>
        </div>
      </div>
    </div>
  );
}
