"use client"
// import Image from 'next/image'
import Link from 'next/link'
import { Announcement } from './announcement';
// import { useState } from 'react'

// import HeroSectionTextHover from './hero-section-text-hover';

const Hero = () => {
    return (
        <>
            <section className="py-12 sm:py-16 lg:py-20 overflow-hidden h-[calc(100dvh-110px)] min-h-max flex items-center relative">
                <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
                    <div className="text-center flex flex-col items-center space-y-10">
                        <Announcement/>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl/tight xl:text-7xl/tight text-gray-900 dark:text-white font-bold max-w-4xl capitalize">
                            Sai Deepak Perumbudur
                        </h1>
                        <p className="text-base text-gray-700 dark:text-gray-300 text-center max-w-xl">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique deleniti earum, qui odio,
                            dolorum labore incidunt ad ab porro, provident excepturi molestiae corporis molestias nam accusamus.
                        </p>
                        <div className="flex justify-center">
                            <Link href="#" className="px-8 h-12 rounded-full flex items-center gap-x-3 bg-emerald-700 text-white hover:bg-opacity-80">
                                Let&apos;s talk
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
