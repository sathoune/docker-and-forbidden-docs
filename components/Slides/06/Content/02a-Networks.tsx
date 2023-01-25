import Lif from "../../../Commons/Lif";
import Picture from "./networks/Picture";

const NetworksA = () => {
  const list = (
    <ul>
      <Lif>{"Firefox -> React - localhost"}</Lif>
      <Lif>{"Firefox -> Python - localhost"}</Lif>
      <Lif>
        <s>{"Python -> Postgres - localhost"}</s>
      </Lif>
      <Lif>{"Python -> Postgres - service-name"}</Lif>
    </ul>
  );
  const frontend = (
    <img
      src={"./logos/react.svg"}
      alt={"React"}
      className={"object-contain h-full w-full"}
    />
  );
  return (
    <section data-auto-animate className={"h-full w-full"}>
      <h2>{"Networks"}</h2>
      <h4>{"Bridge Network"}</h4>

      <Picture display={list} frontend={frontend} />
    </section>
  );
};

export default NetworksA;
