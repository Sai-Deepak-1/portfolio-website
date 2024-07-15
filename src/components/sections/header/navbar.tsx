"use client"

import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
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

  const themeIconVariants = {
    initial: { opacity: 0, rotate: -180, scale: 0.5 },
    animate: { opacity: 1, rotate: 0, scale: 1 },
    exit: { opacity: 0, rotate: 180, scale: 0.5 },
  };

  return (
    <motion.nav
      drag
      dragMomentum={false}
      dragElastic={0.1}
      style={{ x: springX, y: springY }}
      onDragEnd={() => {
        springX.set(-250);
        springY.set(0);
      }}
      className="fixed left-1/2 bottom-4 transform -translate-x-1/2 bg-background/30 dark:bg-background/50 backdrop-blur-lg rounded-full shadow-lg px-4 py-2 flex items-center space-x-2 cursor-move pointer-events-auto"
      whileDrag={{ scale: 1.05 }}
    >
      <motion.span
        className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent px-3 py-2"
        whileHover={{
          backgroundImage: 'linear-gradient(to right, #ff7e5f, #feb47b)',
          transition: { duration: 0.3 }
        }}
      >
        <a href="/">Deepak</a>
      </motion.span>
      <NavItem href="/projects">PROJECTS</NavItem>
      <NavItem href="/about">ABOUT</NavItem>
      <NavItem href="/contact">CONTACT</NavItem>
      <NavItem href="/blog">BLOG</NavItem>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
        aria-label="Toggle theme"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={theme}
            variants={themeIconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            {mounted && (theme === 'dark' ? '🌙' : '☀️')}
          </motion.div>
        </AnimatePresence>
      </button>
    </motion.nav>
  );
};

export default Navbar;