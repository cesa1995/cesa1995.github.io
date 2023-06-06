import { visible } from "@/utils/types";
import style from "./loading.module.css";

const Loading = (visible: visible) => {
  if (!visible.isVisible) {
    return <></>;
  }
  return (
    <div className={style.spinnerContainer}>
      <div className={style.loadingSpinner}></div>
    </div>
  );
};

export default Loading;
