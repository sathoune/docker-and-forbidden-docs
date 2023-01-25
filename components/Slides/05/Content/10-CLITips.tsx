import Lif from "../../../Commons/Lif";

const CLITips = () => {
  return (
    <section>
      <h2>{"CLI commands"}</h2>
      <ul>
        <Lif>
          <code>
            docker-compose up <strong className={"text-yellow-400"}>-d</strong>
          </code>
        </Lif>
        <Lif>
          <code>
            docker compose exec{" "}
            <strong className={"text-yellow-400"}>service-name</strong>{" "}
            <strong className={"text-blue-400"}>bash</strong>
          </code>
        </Lif>
        <Lif>
          <code>
            docker compose run{" "}
            <strong className={"text-yellow-400"}>service-name</strong>{" "}
            <strong className={"text-blue-400"}>
              some-command argument1 argument2
            </strong>
          </code>
        </Lif>
        <Lif>
          <code>
            <span className={"text-yellow-400"}>docker stop </span>
            <span className={"text-blue-400"}>$(docker ps -aq)</span> &&{" "}
            <span className={"text-red-400"}>docker rm </span>
            <span className={"text-blue-400"}>$(docker ps -aq)</span>
          </code>
        </Lif>
      </ul>
    </section>
  );
};
export default CLITips;
