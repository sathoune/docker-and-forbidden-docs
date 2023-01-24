import Title from "./Content/00-Title";
import Dockerfile from "./Content/02-Dockerfile";
import Image from "./Content/01-Image";
import Sharing from "./Content/03-Sharing";
import Multistage from "./Content/04-Multistage";
import Run from "./Content/05-Run";

const Docker = () => {
  return (
    <section>
      <Title />
      <Image />
      <Dockerfile />
      <Sharing />
      <Multistage />
      <Run />
      <aside className={"notes"}></aside>
    </section>
  );
};

export default Docker;
