"use client"
import React, { useState, useRef, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useTheme } from 'next-themes';

const NavItem: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    className="px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/10 rounded-full"
  >
    {children}
  </a>
);

const Navbar: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const dragConstraintsRef = useRef(null);

  const x = useMotionValue(-250);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 400 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div ref={dragConstraintsRef} className="fixed inset-x-0 bottom-0 h-24 pointer-events-none">
      <motion.nav
        drag
        dragMomentum={false}
        dragElastic={0.1}
        dragConstraints={dragConstraintsRef}
        style={{ x: springX, y: springY }}
        onDragEnd={() => {
          springX.set(0);
          springY.set(0);
        }}
        className="absolute left-1/2 bottom-4 transform -translate-x-1/2 bg-background/30 dark:bg-background/50 backdrop-blur-lg rounded-full shadow-lg px-4 py-2 flex items-center space-x-2 cursor-move pointer-events-auto"
        whileDrag={{ scale: 1.05 }}
      >
        <motion.span
          className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent px-3 py-2"
          whileHover={{
            backgroundImage: 'linear-gradient(to right, #ff7e5f, #feb47b)',
            transition: { duration: 0.3 }
          }}
        >
          Deepak.dev()
        </motion.span>
        <NavItem href="#works">WORKS</NavItem>
        <NavItem href="#about">ABOUT</NavItem>
        <NavItem href="#contact">CONTACT</NavItem>
        <NavItem href="#buy">BUY</NavItem>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
          aria-label="Toggle theme"
        >
          {mounted && (theme === 'dark' ? '🌙' : '☀️')}
        </button>
      </motion.nav>
    </div>
  );
};

export default Navbar;