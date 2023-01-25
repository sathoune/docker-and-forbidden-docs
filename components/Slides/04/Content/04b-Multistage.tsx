import { multistageNode } from "./utils/dockerfiles";

const MultistageB = () => {
  return (
    <section data-auto-animate className={"h-4/5 mt-5"}>
      <h2>{"Multistage Builds"}</h2>
      <pre className={"h-3/5"}>
        <code data-line-numbers={"2,10,13,14"}>{multistageNode}</code>
      </pre>
    </section>
  );
};
export default MultistageB;
