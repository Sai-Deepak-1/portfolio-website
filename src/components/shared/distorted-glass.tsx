"use client"

import { ReactNode } from 'react';
import { cn } from "@/lib/utils";

interface DistortedGlassProps {
  children: ReactNode;
  className?: string;
}

export const DistortedGlass = ({ children, className }: DistortedGlassProps) => {
  return (
    <div className={cn("relative w-full h-full", className)}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="glass-effect w-full h-full" />
      </div>
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <filter id="fractal-noise-glass">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.12 0.12"
              numOctaves="1"
              result="warp"
            >
              <animate
                attributeName="baseFrequency"
                dur="60s"
                keyTimes="0;0.5;1"
                values="0.12 0.12;0.06 0.06;0.12 0.12"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="warp"
              scale="30"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      <div className="relative z-[5]">{children}</div>
      <style jsx>{`
        .glass-effect {
          background: repeating-radial-gradient(
            circle at 50% 50%,
            rgba(255, 255, 255, 0) 0,
            rgba(255, 255, 255, 0.2) 10px,
            rgba(255, 255, 255, 0.8) 31px
          );
          filter: url(#fractal-noise-glass);
          background-size: 6px 6px;
          backdrop-filter: blur(10px);
        }
      `}</style>
    </div>
  );
};