import Link from "next/link";
import React from 'react';
import { ChevronRight } from "lucide-react";
import AnimatedWords from "@/components/shared/animations/text-animations";
import { monaSans } from "@/app/fonts/fonts";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
    return (
        <section
            className="flex h-[80vh] w-full items-center justify-center py-0 sm:h-[90vh] md:h-[100vh] 3xl:h-[60vh]"
        >

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
                    <div className="flex flex-wrap items-center justify-center gap-3">

                        <Link href="/resume">
                            <Button
                                className={cn(
                                    "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter",
                                    "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2",
                                )}
                            >
                                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-black" />

                                <p>Download Resume</p>
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button
                                className={cn(
                                    "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter",
                                    "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2",
                                )}
                            >
                                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-black" />
                                <span>Contact Me</span>
                                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
                            </Button>

                        </Link>
                    </div>
                </div>
            </div>
        </section >
    );
}
