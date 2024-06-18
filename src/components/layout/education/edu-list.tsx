import { useRef } from "react";

import { motion, useScroll } from "framer-motion";

import EduListItem, {
  type EduListItemProps,
} from "@/components/layout/education/edu-list-item";

export interface EduListProps {
  title: string;
  details: EduListItemProps[];
}

export default function EduList(
  props: EduListProps,
) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="mx-auto my-40 max-w-7xl px-6 sm:px-14 md:my-60 md:px-20">
      <h2 className="md:mb-30 mb-16 w-full bg-gradient-to-r from-accent/70 to-accent bg-clip-text text-center text-3xl font-bold text-transparent xs:text-4xl sm:text-6xl md:text-8xl">
        {props.title}
      </h2>
      <div ref={ref} className="relative w-full md:mx-auto md:w-[80%]">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-5 h-full w-[5px] origin-top rounded-lg bg-accent"
        ></motion.div>
        <ul className="ml-4 w-full items-center">
          {props.details.map((_details, index) => (
            <EduListItem key={index} {..._details} />
          ))}
        </ul>
      </div>
    </div>
  );
}
