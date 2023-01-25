import Title from "./Content/00-Title";
import Dockerfile from "./Content/02-Dockerfile";
import Image from "./Content/01-Image";
import Sharing from "./Content/03-Sharing";
import Multistage from "./Content/04-Multistage";
import Run from "./Content/05-Run";
import DockerfileA from "./Content/02a-Dockerfile";
import DockerfileB from "./Content/02b-Dockerfile";
import DockerfileC from "./Content/02c-Dockerfile";

const Docker = () => {
  return (
    <section>
      <Title />
      <Image />
      <Dockerfile />
      <DockerfileA />
      <DockerfileB />
      <DockerfileC />
      <Sharing />
      <Multistage />
      <Run />
      <aside className={"notes"}></aside>
    </section>
  );
};

export default Docker;
