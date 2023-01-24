import Lif from "../../../Commons/Lif";

const Sharing = () => {
  return (
    <section>
      <h2>{"Sharing Images"}</h2>
      <ul>
        <Lif>
          <a href={"https://hub.docker.com/"}>Docker Hub</a>
        </Lif>
        <Lif>
          Docker Registry
          <ul>
            <Lif>
              <a href={"https://hub.docker.com/_/registry"}>official image</a>
            </Lif>
            <Lif>
              <a href={"https://aws.amazon.com/ecr/"}>AWS ECR</a>
            </Lif>
            <Lif>
              <a href={"https://cloud.google.com/container-registry"}>
                GCP GCR
              </a>
            </Lif>
          </ul>
        </Lif>
        <Lif>As an artifact</Lif>
      </ul>
    </section>
  );
};

export default Sharing;
