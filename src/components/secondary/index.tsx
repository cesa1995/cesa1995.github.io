import Section from "../section/session";
import { buttomActive, indexSection } from "../../utils/types";
import style from "./secondary.module.css";
import ProjectButtom from "../projectButtom";
import { useState } from "react";
import SmartLeaf from "@/assets/smartLeaf.jpg";
import Unet from "@/assets/unet.jpeg";
import Gtruck from "@/assets/gtruck.png";
import Scoby from "@/assets/scoby.jpeg";
import PillCare from "@/assets/pill&care.png";
import Osp from "@/assets/osp.png";

const Secondary = ({ id }: indexSection) => {
  const [isVisible, setIsVisible] = useState<buttomActive>("Smart Leaf");

  return (
    <Section name="Projects" id={id}>
      <ul className={style.projectList}>
        <li>
          <ProjectButtom
            text="Smart Leaf"
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            image={SmartLeaf}
          >
            The project used an ESP8266 microcontroller to create a low-cost,
            low-power soil quality sensor. The sensor was able to measure the
            following parameters: Temperature, Humidity, Moisture content, pH
            and Electrical conductivity The data from the sensor was then
            transmitted to a cloud server, where it could be accessed by users.
            The data could be used to track soil quality over time, or to
            identify areas with poor soil quality.
          </ProjectButtom>
        </li>
        <li>
          <ProjectButtom
            text="Unet"
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            image={Unet}
          >
            The project used an ESP8266 microcontroller to create a low-cost,
            low-power air quality sensor. The sensor was able to measure the
            following parameters: Temperature, Humidity, Carbon dioxide (CO2),
            pressure, methane (ch4) and carbon monoxide(co) The data from the
            sensor was then transmitted to a cloud server, where it could be
            accessed by users. The data could be used to track air quality over
            time, or to identify areas with poor air quality.
          </ProjectButtom>
        </li>
        <li>
          <ProjectButtom
            text="Gtruck"
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            image={Gtruck}
          >
            creation of a react native app where users can request a shipment of
            goods by entering the pick-up and delivery locations, the weight and
            dimensions of the goods, and the date and time of the shipment. The
            application would associate the request with a nearby driver
            available to transport the goods. The driver would pick up the goods
            and deliver them to the specified location.
          </ProjectButtom>
        </li>
        <li>
          <ProjectButtom
            text="Scoby"
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            image={Scoby}
          >
            Creation of an app in react native and a page in react js with
            features to make mint nft in solana and video calls.
          </ProjectButtom>
        </li>
        <li>
          <ProjectButtom
            text="Pill and care"
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            image={PillCare}
          >
            Edit an existing Angular app for patient medication management in
            the healthcare sector.
          </ProjectButtom>
        </li>
        <li>
          <ProjectButtom
            text="Operation Safe Place"
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            image={Osp}
          >
            Creation of a game in canvas and its web, where you can market nft
            which have features for the internal development of the game.{" "}
          </ProjectButtom>
        </li>
      </ul>
    </Section>
  );
};

export default Secondary;
