"use client";

import React, { useEffect, useState } from 'react';
import { Dock, DockIcon } from './floating-dock';
import { Home, User, Briefcase, BookOpen, Github, Linkedin } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Separator } from "@/components/ui/separator";
import { MoonIcon, SunIcon } from "@/components/shared/icons";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleThemeItem = {
    icon: !mounted ? null : theme === "dark" ? <MoonIcon className='size-[1.2rem]' /> : <SunIcon className='size-[1.2rem]' />,
    label: 'Toggle Mode',
    onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
  };


  const navItems = [
    { icon: <Home />, label: 'Home', href: '/' },
    { icon: <User />, label: 'About Me', href: '/about' },
    { icon: <Briefcase />, label: 'Projects', href: '/projects' },
    { icon: <BookOpen />, label: 'Blog', href: '/blog' },
  ];

  const socialItems = [
    { icon: <Github />, label: 'GitHub', href: 'https://github.com/Sai-Deepak-1' },
    { icon: <Linkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sai-deepak-perumbudur/' },
  ];

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
