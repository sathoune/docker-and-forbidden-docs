import { airflow } from "./composes/airflow";

const ConfigC = () => {
  return (
    <section className={"h-full mt-5"} data-auto-animate>
      <h2>{"Walkthrough"}</h2>
      <pre className={"h-4/5 m-5"}>
        <code data-line-numbers>{airflow}</code>
      </pre>
    </section>
  );
};

export default ConfigC;
