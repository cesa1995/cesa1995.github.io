import Link from "next/link";
import style from "./style.module.css";
import { indexSectionValues } from "../../utils/types";

export default function Header() {
  return (
    <div className={style.container}>
      <ul className={style.list}>
        <li>
          <Link className={style.link} href={indexSectionValues.description}>
            About Me
          </Link>
        </li>
        <li>
          <Link className={style.link} href={indexSectionValues.knowledge}>
            Knowledge
          </Link>
        </li>
        <li>
          <Link className={style.link} href={indexSectionValues.projects}>
            Projects
          </Link>
        </li>
        <li>
          <Link className={style.link} href={indexSectionValues.comments}>
            Learning
          </Link>
        </li>
      </ul>
    </div>
  );
}
