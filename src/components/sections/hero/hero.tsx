"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/content";

export default function Hero() {
  return (
    <div className="container py-24 lg:py-32">
      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Hello there! 👋😎,
          </h1>
          <h1 className="mt-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            I&apos;m {DATA.name}
          </h1>
          <p className="mt-3 text-xl text-muted-foreground">{DATA.bio}</p>
          {/* Buttons */}
          <div className="mt-7 grid gap-3 w-full sm:inline-flex">
            <Button variant="gooeyLeft" size={"lg"} asChild>
              <a href="#about">Download Resume</a>
            </Button>
            <Button variant="expandIcon" Icon={ArrowRightIcon} size={"lg"} iconPlacement="right" asChild>
              <a href="#ContactMe">
                Contact Me
              </a>
            </Button>
          </div>
          {/* End Buttons */}
        </div>
        {/* Col */}
        <div className="relative ms-4">
          <img
            className="w-full rounded-md"
            src="https://placehold.co/800x700"
            alt="Image Description"
          />
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  );
}
