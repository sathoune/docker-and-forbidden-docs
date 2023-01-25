import {
  overrideBase,
  overrideExtension,
  overrideResult,
} from "./overrides/valuesOverride";

const OverridesB = () => {
  return (
    <section className={"h-full mt-5"} data-auto-animate>
      <h2>{"Overrides"}</h2>
      <span className={"text-yellow-700 text-5xl"}>
        <strong>Replacing</strong>
      </span>
      <pre>
        <code data-line-numbers>{overrideBase}</code>
      </pre>
      <pre className={"fragment"}>
        <code data-line-numbers>{overrideExtension}</code>
      </pre>
      <pre className={"fragment"}>
        <code data-line-numbers={"1,6-7"}>{overrideResult}</code>
      </pre>
    </section>
  );
};

export default OverridesB;
