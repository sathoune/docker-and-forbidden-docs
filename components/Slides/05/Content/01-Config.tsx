import { airflow } from "./composes/airflow";
import { thisProject } from "./composes/thisProject";
import { fullStackApp } from "./composes/fullStackApp";

const Config = () => {
  return (
    <section className={"w-full h-full"}>
      <div className={"r-stack w-full h-full"}>
        <h2>{"Walkthrough"}</h2>
        <pre className={"fragment h-full m-5"}>
          <code data-line-numbers>{thisProject}</code>
        </pre>
        <pre className={"fragment h-full m-5"}>
          <code data-line-numbers>{fullStackApp}</code>
        </pre>
        <pre className={"fragment h-full m-5"}>
          <code data-line-numbers>{airflow}</code>
        </pre>
      </div>
    </section>
  );
};

export default Config;
