import Lif from "../../Commons/Lif";

const Teaser = () => {
  return (
    <section>
      <h2>In the next episode</h2>
      <ul>
        <Lif>Build your on CI/CD</Lif>
        <Lif>Some refactoring</Lif>
        <Lif>TBD</Lif>
      </ul>
      <aside className={"notes"}></aside>
    </section>
  );
};

export default Teaser;
