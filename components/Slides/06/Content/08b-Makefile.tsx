import { biggerProject } from "./makefiles/biggerProject";

const MakefileB = () => {
  return (
    <section data-auto-animate className={"h-3/4"}>
      <h2>Use Makefile!</h2>
      <pre className={"h-5/6"}>
        <code data-line-numbers>{biggerProject}</code>
      </pre>
    </section>
  );
};

export default MakefileB;
