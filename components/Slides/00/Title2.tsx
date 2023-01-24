// @ts-ignore
import styles from "./Title.module.css";
import { MutableRefObject, useEffect, useRef, useState } from "react";

function useOnScreen<T extends Element>(
  ref: MutableRefObject<T>,
  rootMargin: string = "0px"
): boolean {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}
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
