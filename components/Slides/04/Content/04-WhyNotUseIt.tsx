import Lif from "../../../Commons/Lif";

const WhyNotUseIt = () => {
  return (
    <section>
      <h2>Why not use it</h2>
      <ul>
        <Lif>I am uncertain...</Lif>
        <Lif>
          You are not developing something that should run in isolation.
          <ul className={"fragment"}>
            <Lif>scripts</Lif>
            <Lif>CLI</Lif>
            <Lif>Desktop App</Lif>
          </ul>
        </Lif>

        <Lif>
          Resource constraint
          <ul className={"fragment"}>
            <Lif>Dev machine</Lif>
            <Lif>Host machine</Lif>
          </ul>
        </Lif>
        <Lif>But really?</Lif>
      </ul>
    </section>
  );
};

export default WhyNotUseIt;
