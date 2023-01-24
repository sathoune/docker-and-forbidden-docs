// @ts-ignore
import styles from "./Title.module.css";

const Title = () => {
  const classes = [styles.bloody, styles.start].join(" ");
  return (
    <section data-auto-animate>
      <h1>
        <div>{"Docker"}</div>
        <div className={styles.bloody}>and Forbidden Docs</div>
      </h1>
    </section>
  );
};

export default Title;
