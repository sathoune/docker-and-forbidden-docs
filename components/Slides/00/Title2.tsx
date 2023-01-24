// @ts-ignore
import styles from "./Title.module.css";
import { useRef } from "react";
import { useOnScreen } from "../../utils/useOnScreen";

const Title2 = () => {
  const ref: any = useRef<HTMLDivElement>();
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, "-300px");
  const classes = [styles.bloody, onScreen ? styles.start : ""].join(" ");
  return (
    <section data-auto-animate>
      <h1>
        <div>{"Docker"}</div>
        <div ref={ref} className={classes}>
          and Forbidden Docs
        </div>
      </h1>
    </section>
  );
};

export default Title2;
