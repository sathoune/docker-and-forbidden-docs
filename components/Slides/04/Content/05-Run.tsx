import { runCommand } from "./utils/runCli";

const Run = () => {
  return (
    <section>
      <h2>
        <code>docker run</code>
      </h2>
      <div className={"fragment"}>Turns images into containers</div>
      <pre className={"fragment"}>
        <code data-line-numbers>{runCommand}</code>
      </pre>
      <div className={"fragment"}>That's a lot of options</div>
    </section>
  );
};
export default Run;
