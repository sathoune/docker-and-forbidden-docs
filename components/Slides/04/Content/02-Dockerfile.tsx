import Lif from "../../../Commons/Lif";
import Code from "../../../Commons/Code";

const Dockerfile = () => {
  return (
    <section data-auto-animate>
      <h2>{"Dockerfile"}</h2>

      <ul>
        <Lif>Set instructions to build an image</Lif>
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
        <Lif>
          <Code>WORKDIR</Code> create a directory to copy files to
        </Lif>
      </ul>
    </section>
  );
};

export default Dockerfile;
