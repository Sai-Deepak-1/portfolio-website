import React, { useState } from 'react'
import styles from './styles.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../anim';
import Links from './Link';
import Curve from './Curve';
import NavFooter from './NavFooter';

const navItems = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Work",
        href: "/work",
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Contact",
        href: "/contact",
    },
]



const Nav = () => {
    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);

    return (
        <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={styles.menu}>
            <div className={styles.body}>
                <div onMouseLeave={() => { setSelectedIndicator(pathname) }} className={styles.nav}>
                    <div className={styles.header}>
                        <p>Navigation</p>
                    </div>
                    {
                        navItems.map((data, index) => {
                            return <Links key={index} data={{ ...data, index }} isActive={selectedIndicator == data.href} setSelectedIndicator={setSelectedIndicator}></Links>
                        })
                    }
                </div>
                <NavFooter />
            </div>
            <Curve />
        </motion.div>
    )
}

export default Nav
