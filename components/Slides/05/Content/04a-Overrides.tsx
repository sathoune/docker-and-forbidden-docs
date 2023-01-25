import { thisBase, thisExtension, thisResult } from "./overrides/thisProject";

const OverridesA = () => {
  return (
    <section className={"w-1/2 h-full mt-5"} data-auto-animate>
      <h2>{"Overrides"}</h2>
      <span className={"text-yellow-700 text-5xl"}>
        <strong>Extending</strong>
      </span>
      <pre>
        <code data-line-numbers>{thisBase}</code>
      </pre>
      <pre className={"fragment"}>
        <code data-line-numbers>{thisExtension}</code>
      </pre>
      <pre className={"fragment"}>
        <code data-line-numbers={"1,7-11"}>{thisResult}</code>
      </pre>
    </section>
  );
};

export default OverridesA;
