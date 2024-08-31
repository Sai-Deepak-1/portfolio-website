/* eslint-disable no-unused-vars */
// dock.tsx
import React, { createContext, useContext, useRef, useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { cva, type VariantProps } from "class-variance-authority"
import { PanelTopClose } from "lucide-react"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

// Dock context
interface DockContextType {
  width: number
  hovered: boolean
  setIsZooming: (value: boolean) => void
  zoomLevel: any
  mouseX: any
  animatingIndexes: number[]
  setAnimatingIndexes: (indexes: number[]) => void
  magnification: number
  distance: number
  direction: 'top' | 'middle' | 'bottom'
  onClick?: () => void
}

const DockContext = createContext<DockContextType>({
  width: 0,
  hovered: false,
  setIsZooming: () => {},
  zoomLevel: null,
  mouseX: null,
  animatingIndexes: [],
  setAnimatingIndexes: () => {},
  magnification: 60,
  distance: 140,
  direction: 'bottom'
})

const useDock = () => useContext(DockContext)

// Dock variants
const dockVariants = cva(
  "mx-auto w-max mt-8 h-[58px] p-2 flex gap-2 rounded-2xl border supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md",
  {
    variants: {
      direction: {
        top: "items-start",
        middle: "items-center",
        bottom: "items-end"
      }
    },
    defaultVariants: {
      direction: "bottom"
    }
  }
)

interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string
  magnification?: number
  distance?: number
  direction?: 'top' | 'middle' | 'bottom'
  children: React.ReactNode
}

export const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  ({ className, children, magnification = 60, distance = 140, direction = 'bottom', ...props }, ref) => {
    const [hovered, setHovered] = useState(false)
    const [width, setWidth] = useState(0)
    const dockRef = useRef<HTMLDivElement>(null)
    const isZooming = useRef(false)
    const [animatingIndexes, setAnimatingIndexes] = useState<number[]>([])
    const [isMobile, setIsMobile] = useState(false)
    const [open, setOpen] = useState(false)

    const setIsZooming = useCallback((value: boolean) => {
      isZooming.current = value
      setHovered(!value)
    }, [])

    const zoomLevel = useMotionValue(1)
    const mouseX = useMotionValue(Infinity)

    useEffect(() => {
      const handleResize = () => {
        setWidth(dockRef.current?.clientWidth || 0)
        setIsMobile(window.innerWidth < 768)
      }
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [])

    const renderChildren = () => {
      return React.Children.map(children, (child: any, index) => {
        return React.cloneElement(child, {
          mouseX: mouseX,
          magnification: magnification,
          distance: distance,
          index: index,
        })
      })
    }

    const mobileContent = (
      <div className="relative block md:hidden">
        <AnimatePresence>
          {open && (
            <motion.div
              layoutId="nav"
              className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2"
            >
              {renderChildren()}
            </motion.div>
          )}
        </AnimatePresence>
        <Button
          onClick={() => setOpen(!open)}
          className="h-15 w-15 rounded-full bg-gray-50 dark:bg-neutral-800 flex items-center justify-center"
        >
          <PanelTopClose className="h-[20px] w-[20px] text-neutral-500 dark:text-neutral-400" />
        </Button>
      </div>
    )

    const desktopContent = (
      <motion.div
        ref={dockRef}
        onMouseMove={(e) => {
          mouseX.set(e.pageX)
          if (!isZooming.current) {
            setHovered(true)
          }
        }}
        onMouseLeave={() => {
          mouseX.set(Infinity)
          setHovered(false)
        }}
        className={cn(dockVariants({ direction, className }))}
        style={{
          scale: zoomLevel,
        }}
        {...props}
      >
        {renderChildren()}
      </motion.div>
    )

    return (
      <DockContext.Provider
        value={{
          hovered,
          setIsZooming,
          width,
          zoomLevel,
          mouseX,
          animatingIndexes,
          setAnimatingIndexes,
          magnification,
          distance,
          direction
        }}
      >
        <TooltipProvider>
          {isMobile ? mobileContent : desktopContent}
        </TooltipProvider>
      </DockContext.Provider>
    )
  }
)

Dock.displayName = 'Dock'

interface DockIconProps {
  icon: React.ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
  mouseX?: any;
  magnification?: number;
  distance?: number;
  index?: number;
}

export const DockIcon: React.FC<DockIconProps> = ({ icon, label, href, onClick, mouseX, magnification, distance, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const dock = useDock();

  const distanceCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distanceCalc, [-distance!, 0, distance!], [40, magnification!, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const mobileAnimation = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: {
      opacity: 0,
      y: 10,
      transition: { delay: index! * 0.05 },
    },
    transition: { delay: (dock.animatingIndexes.length - 1 - index!) * 0.05 },
  };

  const content = (
    <motion.div
      ref={ref}
      style={{ width }}
      {...(dock.direction === 'top' || dock.direction === 'middle' || dock.direction === 'bottom' ? mobileAnimation : {})}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={cn(
              "flex aspect-square items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800",
              "transition-colors hover:bg-gray-300 dark:hover:bg-neutral-700"
            )}
            onClick={onClick}
          >
            <motion.div
              style={{
                width: useTransform(width, [40, magnification!, 40], [20, 40, 20]),
                height: useTransform(width, [40, magnification!, 40], [20, 40, 20]),
              }}
              className="flex items-center justify-center"
            >
              {icon}
            </motion.div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </motion.div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
};

export default Dock