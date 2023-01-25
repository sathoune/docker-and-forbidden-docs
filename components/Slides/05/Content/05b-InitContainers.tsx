import { compose } from "./init/init";

const InitContainersB = () => {
  return (
    <section className={"h-full mt-5"} data-auto-animate>
      <h2>{"Init Containers"}</h2>
      <pre className={"h-3/5 m-5"}>
        <code data-line-numbers={"12-14,20"}>{compose}</code>
      </pre>
    </section>
  );
};

export default InitContainersB;
