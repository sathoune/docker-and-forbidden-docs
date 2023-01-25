import DockerTransformer from "./DockerTransformer/DockerTransformer";
import { useRef } from "react";
import { useOnScreen } from "../../../utils/useOnScreen";
import Lif from "../../../Commons/Lif";

const Title = () => {
  const ref: any = useRef<HTMLDivElement>();
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, "-300px");

  return (
    <section data-auto-animate ref={ref} className={"h-full w-full"}>
      <h2>{"Docker Compose"}</h2>
      {onScreen && <DockerTransformer />}
      <ul>
        <Lif>Breakdown</Lif>
        <Lif>Networks</Lif>
        <Lif>Volumes</Lif>
        <Lif>Organizing configurations</Lif>
      </ul>
    </section>
  );
};

export default Title;
