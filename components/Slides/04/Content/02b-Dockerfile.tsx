import { python } from "./utils/dockerfiles";

const DockerfileB = () => {
  return (
    <section data-auto-animate>
      <h2>{"Dockerfile"}</h2>
      <pre>
        <code data-line-numbers>{python}</code>
      </pre>
    </section>
  );
};

export default DockerfileB;
