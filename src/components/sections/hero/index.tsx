import Link from "next/link";
import React from 'react';
import { AnimatedGradient } from "@/components/shared/animated-gradient";
import { ChevronRight } from "lucide-react";
import AnimatedWords from "@/components/shared/text-animations";
import { monaSans } from "@/components/fonts/fonts";

export default function Hero() {
    return (
        <section
            className="flex h-[80vh] w-full items-center justify-center py-0 sm:h-[90vh] md:h-[100vh] 3xl:h-[60vh]"
        >
            <AnimatedGradient />
            <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
                <div
                    className={`text-center flex flex-col items-center space-y-10 ${monaSans.className}`}
                >
                    <AnimatedWords
                        title="SAI DEEPAK"
                        style="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4 text-gray-900 dark:text-white"
                    />
                    <p className="text-base text-gray-700 dark:text-gray-300 text-center max-w-xl mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique deleniti earum, qui odio,
                        dolorum labore incidunt ad ab porro, provident excepturi molestiae corporis molestias nam accusamus.
                    </p>
                    <div className="flex justify-center mt-6">
                        <Link href="#" className="px-8 h-12 rounded-full flex items-center gap-x-3 bg-emerald-700 text-white hover:bg-opacity-80 transition ease-in-out duration-200">
                            Let&apos;s talk
                            <ChevronRight />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
