import { pythonPoetry } from "./utils/dockerfiles";

const DockerfileC = () => {
  return (
    <section data-auto-animate>
      <h2>{"Dockerfile"}</h2>
      <pre>
        <code data-line-numbers>{pythonPoetry}</code>
      </pre>
    </section>
  );
};

export default DockerfileC;
