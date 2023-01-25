import Lif from "../../../Commons/Lif";

const Compose2 = () => {
  return (
    <section>
      <h2>{"Compose 2.0"}</h2>
      <ul>
        <Lif>
          Written in <code>Go</code>
        </Lif>
        <Lif>Slightly faster</Lif>
        <Lif>
          New features
          <ul>
            <Lif>
              <code>
                docker compose <strong className={"text-yellow-400"}>cp</strong>
              </code>
            </Lif>
            <Lif>
              <pre>
                <code>
                  {`docker compose \\
  --project-name/-p \\
  my-project \\
  down / exec / stap`}
                </code>
              </pre>
            </Lif>
            <Lif>profiles</Lif>
          </ul>
        </Lif>
      </ul>
    </section>
  );
};

export default Compose2;
