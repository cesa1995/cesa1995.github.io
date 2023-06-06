import { motion } from "framer-motion";
import style from "./buttom.module.css";
import Image, { StaticImageData } from "next/image";

const Buttom = ({
  text,
  icon,
  onClick,
}: {
  text: string;
  icon: StaticImageData;
  onClick?: () => {};
}) => {
  return (
    <motion.button
      className={style.buttom}
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 0.6 }}
      onClick={onClick}
    >
      <Image className={style.buttomsIcon} src={icon} alt="new paper icon" />
      {text}
    </motion.button>
  );
};

export default Buttom;
