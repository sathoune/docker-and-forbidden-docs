import { runCommand } from "./utils/runCli";

const Run = () => {
  return (
    <section>
      <h2>{"Run"}</h2>
      <div className={"fragment"}>
        <code>docker run </code>
        <span>Turns images into containers</span>
      </div>
      <pre className={"fragment"}>
        <code data-line-numbers>{runCommand}</code>
      </pre>
      <div className={"fragment"}>That's a lot of options</div>
    </section>
  );
};
export default Run;
