import { extended, short } from "./volumes/volume";

const VolumesA = () => {
  return (
    <section data-auto-animate className={"h-full mt-5"}>
      <h2>{"Volumes"}</h2>
      <span className={"text-yellow-700 text-5xl"}>
        <strong>Volumes</strong>
      </span>
      <pre>
        <code data-line-numbers>{short}</code>
      </pre>
      <pre className={"fragment"}>
        <code data-line-numbers={"4,7"}>{extended}</code>
      </pre>
    </section>
  );
};

export default VolumesA;
