import {
  appendBase,
  appendExtension,
  appendResult,
} from "./overrides/valuesAppended";

const OverridesC = () => {
  return (
    <section className={"w-1/2 h-full"} data-auto-animate>
      <h2>{"Overrides"}</h2>
      <span className={"text-yellow-700 text-5xl"}>
        <strong>Appending</strong>
      </span>
      <pre>
        <code data-line-numbers>{appendBase}</code>
      </pre>
      <pre className={"fragment"}>
        <code data-line-numbers>{appendExtension}</code>
      </pre>
      <pre className={"fragment"}>
        <code data-line-numbers={"1,6-7,9-10"}>{appendResult}</code>
      </pre>
    </section>
  );
};

export default OverridesC;
