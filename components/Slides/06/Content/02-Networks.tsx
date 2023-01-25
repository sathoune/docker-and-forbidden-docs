import Lif from "../../../Commons/Lif";

const Networks = () => {
  return (
    <section data-auto-animate>
      <h2>{"Networks"}</h2>
      <div className={"fragment"}>There a few</div>
      <ul>
        <Lif>overlay</Lif>
        <Lif>host</Lif>
        <Lif>
          <span className={"text-yellow-400"}>bridge</span>
        </Lif>
      </ul>
    </section>
  );
};

export default Networks;
