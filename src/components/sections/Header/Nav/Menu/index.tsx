import styles from './styles.module.scss';
import { motion } from 'framer-motion';
import { links, footerLinks } from './data';
import { perspective, slideIn } from "./anim";
import { useRef } from 'react';

export default function Menu() {
  const ref = useRef(null);
  
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {links.map((link, i) => {
          const { title, href } = link;
          
          return (
            <div key={`b_${i}`} className={styles.linkContainer}>
              <motion.div
                ref={ref}
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <a href={href} className={styles.link}>
                  {title}
                </a>
              </motion.div>
            </div>
          );
        })}
      </div>
      <motion.div className={styles.footer}>
        {footerLinks.map((link, i) => {
          const { title, href } = link;
          
          return (
            <motion.a
              href={href}
              variants={slideIn}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit"
              key={`f_${i}`}
              className={styles.link}
            >
              {title}
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
