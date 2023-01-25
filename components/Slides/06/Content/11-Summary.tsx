import Lif from "../../../Commons/Lif";
import Code from "../../../Commons/Code";

const Summary = () => {
  return (
    <section>
      <h2>Compose</h2>
      <ul>
        <Lif>
          How <Code>docker-compose.yml</Code> works
        </Lif>
        <Lif>Some networking</Lif>
        <Lif>What are volumes</Lif>
        <Lif>Overrides</Lif>
        <Lif>Extending with profiles</Lif>
        <Lif>Organizing with Makefile and .env</Lif>
      </ul>
    </section>
  );
};

export default Summary;
