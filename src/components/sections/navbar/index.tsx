'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, LayoutGroup } from 'framer-motion'
import { ModeToggle } from '@/components/shared/mode-toggle'

const pages = [
    'About', 
    'Blog', 
    'Projects', 
    'Certifications', 
    'Skills'
]

export default function Navbar() {
    const pathname = usePathname()
    const [hovered, setHovered] = useState('')
    return (
        <LayoutGroup id="navbar">
            <header className="fixed top-0 left-0 right-0 z-10 flex flex-wrap items-center justify-between bg-opacity-50 px-4 py-3 backdrop-blur-md">
                <Link href="/" className="text-3xl font-bold text-black dark:text-white no-underline font-heading">
                    SD
                </Link>

                <nav className="order-2 flex-1 basis-full md:order-none md:basis-auto">
                    <ul className="flex flex-wrap justify-center space-x-2 sm:justify-end">
                        {pages.map((page) => {
                            const path = `/${page.toLowerCase()}`
                            const isActive = pathname === path

                            return (
                                <li key={page}>
                                    <Link href={path} className="relative border-0 hover:opacity-100 focus:opacity-100">
                                        <motion.span
                                            layout
                                            className={`relative inline-block cursor-pointer p-2 text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-300 transition-colors duration-300 hover:text-black dark:hover:text-white
                        ${isActive ? 'text-black dark:text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-black dark:after:bg-white after:content-[""]' : ''}
                      `}
                                            onHoverStart={() => setHovered(page)}
                                            onHoverEnd={() => setHovered('')}
                                        >
                                            {hovered === page && (
                                                <motion.span
                                                    layoutId="nav-hover"
                                                    className="absolute inset-0 -z-10 rounded-md bg-gray-200 dark:bg-gray-700"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 0.5 }}
                                                    exit={{ opacity: 0 }}
                                                />
                                            )}
                                            {page}
                                        </motion.span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                <aside className="ml-4">
                    <ModeToggle />
                </aside>
            </header>
        </LayoutGroup>
    )
}
