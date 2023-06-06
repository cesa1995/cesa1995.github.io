import { indexSection } from "@/utils/types";
import Section from "../section/session";
import style from "./knowledge.module.css";
import Buttom from "../buttom";
import ReactIcon from "@/assets/reactIcon.svg";
import PythonIcon from "@/assets/pythonIcon.svg";
import ReactNativeIcon from "@/assets/reactNativeIcon.svg";
import JavascriptIcon from "@/assets/javascriptIcon.svg";
import Next from "@/assets/nextIcon.svg";
import Nestjs from "@/assets/nestjsIcon.svg";
import Solidity from "@/assets/solidityIcon.svg";
import NodeJsIcon from "@/assets/nodejsIcon.svg";
import ArduinoIcon from "@/assets/arduinoIcon.svg";

const Knowledge = ({ id }: indexSection) => {
  return (
    <Section id={id} name="Knowledge">
      <div className={style.container}>
        <Buttom text="React" icon={ReactIcon} />
        <Buttom text="React Native" icon={ReactNativeIcon} />
        <Buttom text="Next" icon={Next} />
        <Buttom text="Nest" icon={Nestjs} />
        <Buttom text="Node" icon={NodeJsIcon} />
        <Buttom text="Javascript" icon={JavascriptIcon} />
        <Buttom text="Python" icon={PythonIcon} />
        <Buttom text="Solidity" icon={Solidity} />
        <Buttom text="Arduino IDE" icon={ArduinoIcon} />
      </div>
    </Section>
  );
};

export default Knowledge;
