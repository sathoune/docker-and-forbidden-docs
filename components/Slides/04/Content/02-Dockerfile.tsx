import { node, python, pythonPoetry } from "./utils/dockerfiles";
import Lif from "../../../Commons/Lif";
import Code from "../../../Commons/Code";

const Dockerfile = () => {
  return (
    <section>
      <h2>{"Dockerfile"}</h2>

      <div className={"r-stack"}>
        <ul>
          <Lif>Instructions</Lif>
          <Lif>
            <Code>FROM</Code> declare base image
          </Lif>
          <Lif>
            <Code>COPY</Code> copy from local filesystem
          </Lif>
          <Lif>
            <Code>RUN</Code> run arbitrary command
          </Lif>
          <Lif>
            <Code>COMMAND</Code> command to start container with
          </Lif>
          <Lif>
            <Code>ARG</Code> build argument
          </Lif>
          <Lif>
            <Code>ENV</Code> runtime environment variable
          </Lif>
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
