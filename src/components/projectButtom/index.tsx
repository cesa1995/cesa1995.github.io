import style from "./projectButtom.module.css";
import { projectButtom } from "@/utils/types";
import { motion } from "framer-motion";
import Image from "next/image";
import NewPaperIcon from "@/assets/newPaperIcon.svg";

const show = {
  left: 0,
  display: "flex",
};

const hide = {
  left: "-100vw",
  transitionEnd: {
    display: "none",
  },
};

const TitleShow = {
  opacity: 1,
  display: "block",
};

const TitleHide = {
  opacity: 0,
  transitionEnd: {
    display: "none",
  },
};

const ProjectButtom = ({
  text,
  setIsVisible,
  isVisible,
  children,
  image,
}: projectButtom) => {
  return (
    <div className={style.container}>
      <motion.div
        className={style.box}
        animate={isVisible === text ? show : hide}
      >
        <motion.div
          animate={isVisible === text ? TitleShow : TitleHide}
          transition={{ delay: 0.5 }}
        >
          <h2 className={style.title}>{text}</h2>
          <p className={style.text}>{children}</p>
        </motion.div>

        <Image src={image} alt="planet" className={style.projectImage} />
      </motion.div>
      <motion.button
        className={style.listItem}
        whileHover={{ scale: 0.9 }}
        whileTap={{ scale: 0.6 }}
        onClick={() => setIsVisible(text)}
      >
        <Image
          className={style.buttomsIcon}
          src={NewPaperIcon}
          alt="new paper icon"
        />
        {text}
      </motion.button>
    </div>
  );
};

export default ProjectButtom;
