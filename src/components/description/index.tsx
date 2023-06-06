import Section from "../section/session";
import { indexSection } from "../../utils/types";
import style from "./primary.module.css";
import Image from "next/image";
import HandShakeIcon from "@/assets/handShakeIcon.svg";
const Description = ({ id }: indexSection) => {
  return (
    <Section name="About Me" id={id}>
      <div className={style.container}>
        <Image
          className={style.icon}
          src={HandShakeIcon}
          alt="hand shake icon"
        />
        <p className={style.introduction}>
          I am a web developer with 4 years of experience. I have worked with a
          variety of technologies, including React Native, ReactJS, Canvas,
          HTML, CSS, JavaScript, Arduino IDE, and am currently learning Ethereum
          and Smart Contracts. I am passionate about building innovative and
          user-friendly web applications. I am also a strong problem solver and
          I am always looking for new ways to improve my skills. In my previous
          role, I was responsible for the development of a React Native mobile
          application. I worked closely with a team of designers and engineers
          to create a high-quality application that was well-received by users.
          I am also an avid learner and I am always looking for new ways to
          improve my skills. I am currently learning Ethereum and Smart
          Contracts, and I am excited to see how these technologies can be used
          to create new and innovative applications. If you are looking for a
          web developer who is passionate, skilled, and always looking for new
          ways to improve, I would be a great fit for your team.
        </p>
      </div>
    </Section>
  );
};

export default Description;
