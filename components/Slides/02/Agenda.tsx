import Lif from "../../Commons/Lif";

const Agenda = () => {
  return (
    <section>
      <h2>Agenda</h2>
      <ul>
        <Lif>Overview</Lif>
        <Lif>Docker</Lif>
        <Lif>Docker Compose</Lif>
        <Lif>Production usage</Lif>
      </ul>
      <aside className={"notes"}></aside>
    </section>
  );
};

export default Agenda;
