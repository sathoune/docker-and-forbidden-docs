import Lif from "../../../Commons/Lif";

const Profiles = () => {
  return (
    <section data-auto-animate>
      <h2>{"Profiles"}</h2>
      <ul>
        <Lif>
          <code>
            docker compose{" "}
            <strong className={"text-yellow-500"}>
              --profile SOME_PROFILE
            </strong>{" "}
            <strong className={"text-blue-500"}>--profile OTHER_PROFILE</strong>{" "}
            up
          </code>
        </Lif>
        <Lif>
          With <code className={"text-yellow-500"}>.env</code> file
        </Lif>
      </ul>
    </section>
  );
};

export default Profiles;
