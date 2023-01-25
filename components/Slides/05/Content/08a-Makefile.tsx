import { thisProject } from "./makefiles/thisProject";

const MakefileA = () => {
  return (
    <section data-auto-animate>
      <h2>Use Makefile!</h2>

      <div className={"mb-6"}>
        <div>Run with:</div>
        <ul>
          <li>
            <code>make</code>
          </li>
          <li>
            <code className={"my-3"}>make down</code>
          </li>
          <li>
            <code>make prod</code>
          </li>
        </ul>
      </div>
      <pre>
        <code data-line-numbers>{thisProject}</code>
      </pre>
    </section>
  );
};

export default MakefileA;
