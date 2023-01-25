import DockerTransformer from "./DockerTransformer/DockerTransformer";
import { useRef } from "react";
import { useOnScreen } from "../../../utils/useOnScreen";

const Title = () => {
  const ref: any = useRef<HTMLDivElement>();
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, "-300px");

  return (
    <section ref={ref} className={"h-full w-full"}>
      <h2>{"Docker Compose"}</h2>
      {onScreen && <DockerTransformer />}
    </section>
  );
};

export default Title;
