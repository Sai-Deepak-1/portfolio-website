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
        { icon: <SiNextdotjs color={SiNextdotjsHex} />, position: "-left-7 top-5 group-hover:-rotate-10 group-hover:translate-y-2" },
        { icon: <SiCss3 color={SiCss3Hex} />, position: "-left-6 -top-6 group-hover:-rotate-20 group-hover:translate-x-2" },
        { icon: <SiJavascript color={SiJavascriptHex} />, position: "left-96 -top-7 group-hover:rotate-10 group-hover:-translate-y-2" },
        { icon: <SiReact color={SiReactHex} />, position: "left-96 top-8 group-hover:rotate-20 group-hover:translate-x-2" },
    ];

    const cloudIcons: ItemProps[] = [
        { icon: <SiAmazonec2 color={SiAmazonec2Hex} />, position: "-left-10 -top-2 group-hover:rotate-30 group-hover:-translate-y-2" },
        { icon: <SiLinux color={SiLinuxHex} />, position: "-left-12 top-0 group-hover:-rotate-45" },
        { icon: <SiAmazonwebservices color={SiAmazonwebservicesHex} />, position: "left-10 -top-2 group-hover:rotate-30" },
        { icon: <SiVercel color={SiVercelHex} />, position: "left-12 top-0 group-hover:rotate-45" },
    ];

    const mlIcons: ItemProps[] = [
        { icon: <SiPython color={SiPythonHex} />, position: "-left-10 top-0 group-hover:-rotate-10 group-hover:translate-y-2" },
        { icon: <SiPytorch color={SiPytorchHex} />, position: "-left-12 top-0 group-hover:-rotate-20 group-hover:translate-x-2" },
        { icon: <SiNumpy color={SiNumpyHex} />, position: "left-10 top-0 group-hover:rotate-10 group-hover:-translate-y-2" },
        { icon: <SiOpenai color={SiOpenaiHex} />, position: "left-12 top-0 group-hover:rotate-20 group-hover:translate-x-2" },
    ];

    const techIcons: ItemProps[] = [
        { icon: "💻", position: "-left-10 -top-2 group-hover:rotate-30 group-hover:-translate-y-2" },
        { icon: "🎮", position: "-left-12 top-0 group-hover:-rotate-45" },
        { icon: "👨‍💻", position: "left-10 -top-2 group-hover:rotate-30" },
        { icon: "🕹️", position: "left-12 top-0 group-hover:rotate-45" },
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

                <div className="text-2xl font-semibold">
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
                </div>

                <div className="text-2xl font-semibold">
                    I love to learn
                    <span className="group relative inline-block mx-1">
                        <span className="text-red-400">latest technologies</span>
                        <HoverEffect items={techIcons} />
                    </span>
                    and try to implement them.
                </div>
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