import Link from "next/link";
import React from 'react';
import { ChevronRight } from "lucide-react";
import AnimatedWords from "@/components/shared/animations/text-animations";
import { monaSans } from "@/app/fonts/fonts";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatedGradient } from "@/components/shared/animated-gradient";

export default function Hero() {
    return (
        <section
            className="flex h-[80vh] w-full items-center justify-center py-0 sm:h-[90vh] md:h-[100vh] 3xl:h-[60vh]"
        >
            <AnimatedGradient/>
            <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
                <div
                    className={`text-center flex flex-col items-center space-y-10 ${monaSans.className}`}
                >
                    <AnimatedWords
                        title="SAI DEEPAK"
                        style="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
                    />
                    <p className="text-xl text-gray-700 dark:text-gray-300 text-center max-w-xl mt-4">
                        A Java Developer with a passion in building Web Development and ML DevOps.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">

                        <Link
                            className={cn(
                                buttonVariants({ variant: "rainbow", size: "lg" }),
                                "w-full gap-2 whitespace-nowrap",
                            )}
                            href="/resume"
                        >
                            <p>Download Resume</p>
                        </Link>
                        <Link
                            className={cn(
                                buttonVariants({
                                    variant: "outline",
                                    size: "lg",
                                }),
                                "group relative gap-2 w-full",
                            )}
                            href="/contact"
                        >
                            <span>Contact Me</span>
                            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
                        </Link>
                    </div>
                </div>
            </div>
        </section >
    );
}
