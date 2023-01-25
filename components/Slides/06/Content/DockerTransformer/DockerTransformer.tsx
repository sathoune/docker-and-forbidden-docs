import DockerSvg from "./DockerSvg";
import {
  useHead,
  useLeftArm,
  useLeftLeg,
  useRightArm,
  useRightLeg,
} from "./hooks";

const DockerTransformer = () => {
  return (
    <div className={"h-full w-full"}>
      <DockerSvg
        colour={"red"}
        useAnimation={useHead}
        startingPosition={"bottom-0 right-0"}
      />
      <DockerSvg
        colour={"yellow"}
        useAnimation={useLeftArm}
        startingPosition={"bottom-full right-0"}
      />
      <DockerSvg
        colour={"pink"}
        useAnimation={useRightArm}
        startingPosition={"bottom-1/2 right-full"}
      />
      <DockerSvg
        colour={"black"}
        useAnimation={useLeftLeg}
        startingPosition={"bottom-1/2 right-0"}
      />
      <DockerSvg
        colour={"blue"}
        useAnimation={useRightLeg}
        startingPosition={"bottom-1/2 right-1/2"}
      />
    </div>
  );
};

export default DockerTransformer;
