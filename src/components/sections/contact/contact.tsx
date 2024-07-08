"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/magicui/marquee";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Code,
  Book,
  Briefcase,
  Mail,
  Award,
  PhoneCall,
  ChevronRight,
  LucideIcon,
} from "lucide-react";
import { useEffect, useId, useRef, useState, ReactElement } from "react";

interface Tile {
  icon: ReactElement<LucideIcon>;
  bg: ReactElement;
}

const tiles: Tile[] = [
  {
    icon: <Briefcase className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-orange-600 via-rose-600 to-violet-600 opacity-70 blur-[20px] filter"></div>
    ),
  },
  {
    icon: <Book className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-70 blur-[20px] filter"></div>
    ),
  },
  {
    icon: <PhoneCall className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-green-500 via-teal-500 to-emerald-600 opacity-70 blur-[20px] filter"></div>
    ),
  },
  {
    icon: <Award className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 opacity-70 blur-[20px] filter"></div>
    ),
  },
  {
    icon: <Mail className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-orange-600 via-rose-600 to-violet-600 opacity-70 blur-[20px] filter"></div>
    ),
  },
  {
    icon: <Code className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 opacity-70 blur-[20px] filter"></div>
    ),
  },
];

const shuffleArray = (array: Tile[]): Tile[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const Card: React.FC<Tile> = ({ icon, bg }) => {
  const id = useId();
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { delay: Math.random() * 2, ease: "easeOut", duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      key={id}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      className={cn(
        "relative size-16 sm:size-20 cursor-pointer overflow-hidden rounded-2xl border p-3 sm:p-4",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      {icon}
      {bg}
    </motion.div>
  );
};

export default function Contact() {
  const [randomTiles1, setRandomTiles1] = useState<Tile[]>([]);
  const [randomTiles2, setRandomTiles2] = useState<Tile[]>([]);
  const [randomTiles3, setRandomTiles3] = useState<Tile[]>([]);
  const [randomTiles4, setRandomTiles4] = useState<Tile[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRandomTiles1(shuffleArray([...tiles]));
      setRandomTiles2(shuffleArray([...tiles]));
      setRandomTiles3(shuffleArray([...tiles]));
      setRandomTiles4(shuffleArray([...tiles]));
    }
  }, []);

  return (
    <section id="cta" className="py-8 sm:py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[95vw] sm:max-w-[90vw]">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-[2rem] border">
          <Marquee
            reverse
            className="-delay-[200ms] [--duration:20s]"
            repeat={4}
          >
            {randomTiles1.map((tile, idx) => (
              <Card key={idx} icon={tile.icon} bg={tile.bg} />
            ))}
          </Marquee>
          <Marquee reverse className="[--duration:30s]" repeat={4}>
            {randomTiles2.map((tile, idx) => (
              <Card key={idx} icon={tile.icon} bg={tile.bg} />
            ))}
          </Marquee>
          <Marquee
            reverse
            className="-delay-[200ms] [--duration:20s]"
            repeat={4}
          >
            {randomTiles3.map((tile, idx) => (
              <Card key={idx} icon={tile.icon} bg={tile.bg} />
            ))}
          </Marquee>
          <Marquee reverse className="[--duration:30s]" repeat={4}>
            {randomTiles4.map((tile, idx) => (
              <Card key={idx} icon={tile.icon} bg={tile.bg} />
            ))}
          </Marquee>
          <div className="absolute z-10 px-4 sm:px-0">
            <div className="mx-auto size-20 sm:size-24 lg:size-32 rounded-[2rem] border bg-white/10 p-2 sm:p-3 shadow-2xl backdrop-blur-md dark:bg-black/10">
              <PhoneCall className="mx-auto size-14 sm:size-16 lg:size-24 text-black dark:text-white" />
            </div>
            <div className="z-10 mt-4 flex flex-col items-center text-center text-primary">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                Let&apos;s Connect
              </h1>
              <p className="mt-2 text-sm sm:text-base">
                Looking to collaborate or learn more about my services?
                Feel free to reach out!
              </p>
              <a
                href="/Contact"
                className={cn(
                  buttonVariants({
                    size: "lg",
                    variant: "outline",
                  }),
                  "group mt-4 rounded-[2rem] px-4 sm:px-6 text-sm sm:text-base",
                )}
              >
                Contact Me
                <ChevronRight className="ml-1 size-3 sm:size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
              </a>
            </div>
            <div className="absolute inset-0 -z-10 rounded-full bg-white opacity-40 blur-xl dark:bg-black" />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-white to-70% dark:to-black" />
        </div>
      </div>
    </section>
  );
}