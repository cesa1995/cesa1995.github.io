import Link from "next/link";
import style from "./style.module.css";
import { indexSectionValues } from "../../utils/types";

export default function Header() {
  return (
    <div className={style.container}>
      <ul className={style.list}>
        <li>
          <Link className={style.link} href={indexSectionValues.primary}>
            About Me
          </Link>
        </li>
        <li>
          <Link className={style.link} href={indexSectionValues.secondary}>
            Projects
          </Link>
        </li>
        <li>
          <Link className={style.link} href={indexSectionValues.tertiary}>
            Learning
          </Link>
        </li>
      </ul>
    </div>
  );
}
