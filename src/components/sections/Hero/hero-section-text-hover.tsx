import React from "react";
import { SiAmazonec2, SiAmazonec2Hex, SiAmazonwebservices, SiAmazonwebservicesHex, SiCss3, SiCss3Hex, SiJavascript, SiJavascriptHex, SiLinux, SiLinuxHex, SiNextdotjs, SiNextdotjsHex, SiNumpy, SiNumpyHex, SiOpenai, SiOpenaiHex, SiPython, SiPythonHex, SiPytorch, SiPytorchHex, SiReact, SiReactHex, SiVercel, SiVercelHex } from '@icons-pack/react-simple-icons';
import { cn } from "@/lib/utils";

interface ItemProps {
    icon: React.ReactNode;
    position: string;
}

interface HeroCardProps {
    className?: string;
}

const HeroSectionTextHover: React.FC<HeroCardProps> = ({ className }) => {
    const webDevIcons: ItemProps[] = [
        { icon: <SiNextdotjs color={SiNextdotjsHex} />, position: "-left-20 top-3 group-hover:-rotate-[10deg] group-hover:-translate-y-12 md:-left-28 md:-top-2 sm:-left-24" },
        { icon: <SiCss3 color={SiCss3Hex} />, position: "-left-[72px] top-0 group-hover:-rotate-[20deg] group-hover:-translate-x-10 md:-left-[135px] md:-top-2 sm:-left-24 " },
        { icon: <SiJavascript color={SiJavascriptHex} />, position: "left-[150px] top-0 group-hover:rotate-[10deg] group-hover:-translate-y-10 md:left-[210px] md:-top-1 sm:left-[180px]" },
        { icon: <SiReact color={SiReactHex} />, position: "left-[105px] top-0 group-hover:rotate-[20deg] group-hover:translate-x-16 md:left-[190px] md:-top-2 sm:left-[150px]" },
    ];

    const cloudIcons: ItemProps[] = [
        { icon: <SiAmazonec2 color={SiAmazonec2Hex} />, position: "-left-[100px] -top-7 -rotate-[30deg] group-hover:-translate-y-8 md:-left-40 md:-top-16 sm:-left-32" },
        { icon: <SiLinux color={SiLinuxHex} />, position: "-left-[115px] -top-2 group-hover:-rotate-45 md:-left-44 md:-top-1 sm:-left-36" },
        { icon: <SiAmazonwebservices color={SiAmazonwebservicesHex} />, position: "left-32 -top-12 rotate-[30deg] md:left-[200px] md:-top-[70px] sm:left-[175px] sm:-top-12" },
        { icon: <SiVercel color={SiVercelHex} />, position: "left-32 -top-2 group-hover:rotate-[45deg] md:left-[200px] md:-top-1 sm:left-[160px] " },
    ];

    const mlIcons: ItemProps[] = [
        { icon: <SiPython color={SiPythonHex} />, position: "-left-20 top-3 group-hover:-rotate-[10deg] group-hover:-translate-y-12 md:-left-28 md:-top-2 sm:-left-24" },
        { icon: <SiPytorch color={SiPytorchHex} />, position: "-left-[72px] top-0 group-hover:-rotate-[20deg] group-hover:-translate-x-10 md:-left-[135px] md:-top-2 sm:-left-24 " },
        { icon: <SiNumpy color={SiNumpyHex} />, position: "left-[150px] top-0 group-hover:rotate-[10deg] group-hover:-translate-y-10 md:left-[210px] md:-top-1 sm:left-[180px]" },
        { icon: <SiOpenai color={SiOpenaiHex} />, position: "left-[105px] top-0 group-hover:rotate-[20deg] group-hover:translate-x-16 md:left-[190px] md:-top-2 sm:left-[150px]" },
    ];

    const techIcons: ItemProps[] = [
        { icon: "💻", position: "-left-[100px] -top-7 -rotate-[30deg] group-hover:-translate-y-8 md:-left-40 md:-top-16 sm:-left-32" },
        { icon: "🎮", position: "-left-[115px] -top-2 group-hover:-rotate-45 md:-left-44 md:-top-1 sm:-left-36" },
        { icon: "👨‍💻", position: "left-32 -top-12 rotate-[30deg] md:left-[200px] md:-top-[70px] sm:left-[175px] sm:-top-12" },
        { icon: "🕹️", position: "left-32 -top-2 group-hover:rotate-[45deg] md:left-[200px] md:-top-1 sm:left-[160px] " },
    ];

    return (
        <div className={cn(
            "py-8 relative min-h-[200px] w-full rounded-2xl",
            className
        )}>
            <div className="flex flex-col items-start justify-center gap-4 px-8">
                <h1 className="text-4xl font-semibold">
                    I am a <span className="group relative inline-block">
                        <span className="text-blue-400">Full-Stack Web Developer</span>
                        <HoverEffect items={webDevIcons} />
                    </span> and a <span className="group relative inline-block">
                        <span className="text-green-400">Computer Science Graduate</span>
                        <HoverEffect items={techIcons} />
                    </span>.
                </h1>

                <p className="text-2xl font-semibold">
                    I am passionate about
                    <span className="group relative inline-block mx-1">
                        <span className="text-blue-400">Web Development</span>
                        <HoverEffect items={webDevIcons} />
                    </span>,
                    <span className="group relative inline-block mx-1">
                        <span className="text-orange-400">Cloud Computing</span>
                        <HoverEffect items={cloudIcons} />
                    </span>, and
                    <span className="group relative inline-block mx-1">
                        <span className="text-purple-400">Machine Learning</span>
                        <HoverEffect items={mlIcons} />
                    </span>.
                </p>

                <p className="text-2xl font-semibold">
                    I love to learn
                    <span className="group relative inline-block mx-1">
                        <span className="text-red-400">latest technologies</span>
                        <HoverEffect items={techIcons} />
                    </span>
                    and try to implement them.
                </p>
            </div>
        </div>
    );
};

const HoverEffect: React.FC<{ items: ItemProps[] }> = ({ items }) => (
    <div className="absolute inset-0 cursor-pointer opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {items.map((item, index) => (
            <span
                key={index}
                className={cn(
                    "pointer-events-none absolute transform text-lg transition-transform duration-500 group-hover:scale-110 group-hover:translate-y-1",
                    item.position
                )}
            >
                {item.icon}
            </span>
        ))}
    </div>
);

export default HeroSectionTextHover;