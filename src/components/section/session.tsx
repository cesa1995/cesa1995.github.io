import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ReactNode, useRef } from "react";
import style from "./section.module.css";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const Section = ({
  id,
  name,
  children,
}: {
  id: string;
  name: string;
  children: ReactNode;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  return (
    <section className={style.section} id={id}>
      <div ref={ref}>{children}</div>
      <motion.h2 style={{ y }}>{`${name}`}</motion.h2>
    </section>
  );
};

export default Section;
