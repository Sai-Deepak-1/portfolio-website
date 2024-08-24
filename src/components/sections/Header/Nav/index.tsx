import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from './Button';
import Menu from './Menu';
import styles from './styles.module.scss';

const menuVariants = {
  open: {
    width: '480px',
    height: '650px',
    transition: { duration: 0.75, type: 'tween', ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: '100px',
    height: '40px',
    transition: { duration: 0.75, delay: 0.35, type: 'tween', ease: [0.76, 0, 0.24, 1] },
  },
};

export default function Nav() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.header}>
      <motion.div
        className={styles.menu}
        variants={menuVariants}
        animate={isActive ? 'open' : 'closed'}
        initial='closed'
      >
        <AnimatePresence>{isActive && <Menu />}</AnimatePresence>
      </motion.div>
      <Button isActive={isActive} toggleMenu={() => setIsActive(!isActive)} />
    </div>
  );
}
