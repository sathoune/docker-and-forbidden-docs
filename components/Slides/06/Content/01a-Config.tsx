import { thisProject } from "./composes/thisProject";

const ConfigA = () => {
  return (
    <section className={"w-full h-full"} data-auto-animate>
      <h2>{"Walkthrough"}</h2>
      <pre className={"h-4/5 m-5"}>
        <code data-line-numbers>{thisProject}</code>
      </pre>
    </section>
  );
};

export default ConfigA;
