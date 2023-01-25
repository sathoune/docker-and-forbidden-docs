import Lif from "../../../Commons/Lif";
import Picture from "./networks/Picture";

const NetworksB = () => {
  const list = (
    <ul>
      <li>{"Firefox -> Python - localhost"}</li>
      <li>
        <s>{"Python -> Postgres - localhost"}</s>
      </li>
      <li>{"Python -> Postgres - service-name"}</li>
      <Lif>{"Firefox -> Next - localhost"}</Lif>
      <Lif>{"Next -> Python - ?"}</Lif>
      <Lif>{"Next -> Python - service-name?"}</Lif>
    </ul>
  );
  const frontend = (
    <img
      src={"./logos/nextjs.svg"}
      alt={"Next"}
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

export default NetworksB;
