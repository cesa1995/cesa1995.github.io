import type { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import Layout from "../components/layout";
import { motion, useScroll, useSpring } from "framer-motion";

import style from "./page.module.css";
import Description from "@/components/description";
import Projects from "@/components/projects";
import Comments from "@/components/comments";
import Knowledge from "@/components/knowledge";

const Home: NextPageWithLayout = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <Description id="description" />
      <Knowledge id="knowledge" />
      <Projects id="projects" />
      <Comments id="comments" />
      <motion.div className={style.progress} style={{ scaleX }} />
    </>
  );
};

Home.getLayout = function getLayout(home: ReactElement) {
  return <Layout>{home}</Layout>;
};

export default Home;
