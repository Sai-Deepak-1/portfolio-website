import React from 'react';
import Marquee from "@/components/ui/marquee";

interface MarqueeDividerProps {
    title: string;
}

const MarqueeDivider: React.FC<MarqueeDividerProps> = ({ title }) => {
    return (
        <div className="relative flex h-fit w-full items-center justify-center overflow-hidden bg-transparent">
            <div className="px-6 py-2 w-full max-w-full bg-black dark:bg-white rounded-full">
                <Marquee pauseOnHover className="[--duration:20s]">
                    <h2 className="text-3xl font-bold text-white dark:text-black tracking-widest">
                        {title} &nbsp;&nbsp;&nbsp; {title} &nbsp;&nbsp;&nbsp; {title} &nbsp;&nbsp;&nbsp;
                    </h2>
                </Marquee>
            </div>
        </div>
    );
};

export default MarqueeDivider;