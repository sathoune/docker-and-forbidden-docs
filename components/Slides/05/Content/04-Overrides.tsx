import Lif from "../../../Commons/Lif";

const Overrides = () => {
  const composeFiles = "-f docker-compose.yml -f docker-compose.prod.yml";
  return (
    <section data-auto-animate>
      <h2>{"Overrides"}</h2>
      <ul>
        <Lif>
          <code>
            docker compose{" "}
            <strong className={"text-yellow-400"}>{composeFiles}</strong> up -d
          </code>
        </Lif>
        <Lif>
          <code>docker-compose.override.yml</code>
        </Lif>
        <Lif>No need for attaching override</Lif>
      </ul>
    </section>
  );
};

export default Overrides;
