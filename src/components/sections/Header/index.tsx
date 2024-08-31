"use client";

import React from 'react';
import { Dock, DockIcon } from './floating-dock';
import { Home, User, Briefcase, BookOpen, Github, Linkedin } from 'lucide-react';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { Separator } from "@/components/ui/separator";
import { MoonIcon, SunIcon } from "@/components/shared/icons";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const navItems = [
    { icon: <Home />, label: 'Home', href: '/' },
    { icon: <User />, label: 'About Me', href: '/about' },
    { icon: <Briefcase />, label: 'Projects', href: '/projects' },
    { icon: <BookOpen />, label: 'Blog', href: '/blog' },
  ];

  const socialItems = [
    { icon: <Github />, label: 'GitHub', href: 'https://github.com/yourusername' },
    { icon: <Linkedin />, label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
  ];

  const toggleThemeItem = {
    icon: theme === "dark" ? <MoonIcon className='size-[1.2rem]'/> : <SunIcon className='size-[1.2rem]'/>,
    label: 'Toggle Mode',
    onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
  };

  return (
    <div className='fixed left-1/2 transform -translate-x-1/2 bottom-[15px]'>
      <Dock magnification={60} distance={100} direction="bottom">
        {navItems.map((item, index) => (
          <DockIcon key={index} {...item} />
        ))}
        <Separator orientation="vertical" className="h-full" />
        {socialItems.map((item, index) => (
          <DockIcon key={index} {...item} />
        ))}
        <Separator orientation="vertical" className="h-full" />
        <DockIcon {...toggleThemeItem} />
      </Dock>
    </div>
  );
}
