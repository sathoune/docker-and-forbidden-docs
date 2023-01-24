import { node, python, pythonPoetry } from "./utils/dockerfiles";
import Lif from "../../../Commons/Lif";

const Dockerfile = () => {
  return (
    <section>
      <h2>{"Dockerfile"}</h2>

      <div className={"r-stack"}>
        <ul>
          <Lif>Instructions</Lif>
        </ul>
        <pre className={"fragment"}>
          <code data-line-numbers>{node}</code>
        </pre>
        <pre className={"fragment"}>
          <code data-line-numbers>{python}</code>
        </pre>
        <pre className={"fragment"}>
          <code data-line-numbers>{pythonPoetry}</code>
        </pre>
      </div>
    </section>
  );
};

export default Dockerfile;
