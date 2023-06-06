import type { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import Layout from "../components/layout";
import { motion, useScroll, useSpring } from "framer-motion";

import style from "./page.module.css";
import Primary from "@/components/primary";
import Secondary from "@/components/secondary";
import Tertiary from "@/components/tertiary";

const Home: NextPageWithLayout = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <Primary id="primary" />
      <Secondary id="secondary" />
      <Tertiary id="tertiary" />
      <motion.div className={style.progress} style={{ scaleX }} />
    </>
  );
};

Home.getLayout = function getLayout(home: ReactElement) {
  return <Layout>{home}</Layout>;
};

export default Home;
