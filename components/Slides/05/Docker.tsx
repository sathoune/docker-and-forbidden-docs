import Title from "./Content/00-Title";
import Dockerfile from "./Content/02-Dockerfile";
import Image from "./Content/01-Image";
import Multistage from "./Content/03-Multistage";
import Run from "./Content/05-Run";
import DockerfileA from "./Content/02a-Dockerfile";
import DockerfileB from "./Content/02b-Dockerfile";
import DockerfileC from "./Content/02c-Dockerfile";
import MultistageA from "./Content/03a-Multistage";
import MultistageB from "./Content/03b-Multistage";
import Summary from "./Content/04-Summary";

const Docker = () => {
  return (
    <section>
      <Title />
      <Image />
      <Dockerfile />
      <DockerfileA />
      <DockerfileB />
      <DockerfileC />
      <Multistage />
      <MultistageA />
      <MultistageB />
      <Run />
      <Summary />
      <aside className={"notes"}></aside>
    </section>
  );
};

export default Docker;
