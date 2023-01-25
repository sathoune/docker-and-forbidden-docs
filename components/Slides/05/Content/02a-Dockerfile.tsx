import { node } from "./utils/dockerfiles";

const DockerfileA = () => {
  return (
    <section data-auto-animate>
      <h2>{"Dockerfile"}</h2>
      <pre>
        <code data-line-numbers>{node}</code>
      </pre>
    </section>
  );
};

export default DockerfileA;
