import { multistageNode, thisProject } from "./utils/dockerfiles";

const Multistage = () => {
  return (
    <section>
      <h2>{"Multistage"}</h2>
      <div className={"r-stack"}>
        <pre className={"fragment"}>
          <code data-line-numbers={"2,11"}>{thisProject}</code>
        </pre>
        <pre className={"fragment"}>
          <code data-line-numbers={"2,10,13,14"}>{multistageNode}</code>
        </pre>
      </div>
    </section>
  );
};
export default Multistage;
