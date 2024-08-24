'use client'

import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';

import Lenis from 'lenis'
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

type SlideProps = {
  src: string;
  direction: 'left' | 'right';
  left: string;
  progress: MotionValue<number>;
}

type PhraseProps = {
  src: string;
}

const Slide: React.FC<SlideProps> = ({ src, direction, left, progress }) => {
  const directionMultiplier = direction === 'left' ? -1 : 1;
  const translateX = useTransform(progress, [0, 1], [150 * directionMultiplier, -150 * directionMultiplier])

  return (
    <motion.div style={{x: translateX, left}} className="relative flex whitespace-nowrap">
      <Phrase src={src}/>
      <Phrase src={src}/>
      <Phrase src={src}/>
    </motion.div>
  )
}

const Phrase: React.FC<PhraseProps> = ({src}) => {
  return (
    <div className={'px-5 flex gap-5 items-center'}>
      <p className='text-[7.5vw]'>Sai Deepak Perumbudur</p>
      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image style={{objectFit: "cover"}} src={src} alt="image" fill/>
      </span>
    </div>
  )
}

export default function SlidingImages() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  useEffect(() => {
    const lenis = new Lenis()
    
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <main className="overflow-hidden">
      <div className='h-[100vh]'/>
      <div ref={container}>
        <Slide src={'/svg/placeholder.svg'} direction={'left'} left="-40%" progress={scrollYProgress}/>
        <Slide src={'/svg/placeholder.svg'} direction={'right'} left="-25%" progress={scrollYProgress}/>
        <Slide src={'/svg/placeholder.svg'} direction={'left'} left="-75%" progress={scrollYProgress}/>
      </div>
      <div className='h-[100vh]' />
    </main>
  );
}