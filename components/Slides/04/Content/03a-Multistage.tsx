import { thisProject } from "./utils/dockerfiles";

const MultistageA = () => {
  return (
    <section data-auto-animate className={"h-3/5 mt-5"}>
      <h2>{"Multistage Builds"}</h2>
      <pre>
        <code data-line-numbers={"2,11"}>{thisProject}</code>
      </pre>
    </section>
  );
};
export default MultistageA;
