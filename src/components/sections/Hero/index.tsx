import { VelocityScroll } from '@/components/ui/scroll-based-velocity'
import React from 'react'

const Hero = () => {
    return (
        <>
            <VelocityScroll
                text="Sai Deepak Perumbudur"
                default_velocity={5}
                className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
            />
            <VelocityScroll
                text="Sai Deepak Perumbudur"
                default_velocity={4}
                className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
            />
            <VelocityScroll
                text="Sai Deepak Perumbudur"
                default_velocity={6}
                className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
            />
        </>
    )
}

export default Hero
