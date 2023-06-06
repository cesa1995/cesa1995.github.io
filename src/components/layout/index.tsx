import Header from "../header/header";
import Footer from "../footer";
import Image from "next/image";
import { children } from "@/utils/types";
import Background from "@/assets/background.jpg";
import style from "./layout.module.css";

export default function Layout({ children }: children) {
  return (
    <>
      <Image className={style.background} src={Background} alt="Background" />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
