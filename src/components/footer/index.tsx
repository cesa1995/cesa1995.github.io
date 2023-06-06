import Link from "next/link";
import style from "./footer.module.css";
import InkIcon from "@/assets/linkedinIcon.svg";
import Twitter from "@/assets/twitterSquareIcon.svg";
import GitHub from "@/assets/githubMarkIcon.svg";
import Image from "next/image";
export default function Footer() {
  return (
    <div className={style.container}>
      <Link href="https://www.linkedin.com/in/cesa1995/">
        <Image className={style.icon} src={InkIcon} alt="" />
      </Link>
      <Link href="https://twitter.com/Cesar33781043">
        <Image className={style.icon} src={Twitter} alt="" />
      </Link>
      <Link href="https://github.com/cesa1995">
        <Image className={style.icon} src={GitHub} alt="" />
      </Link>
    </div>
  );
}
