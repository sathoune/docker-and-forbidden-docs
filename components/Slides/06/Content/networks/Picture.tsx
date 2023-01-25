import Python from "../../../../../public/logos/python.svg";
import { ReactNode } from "react";

const Picture = ({
  display,
  frontend,
}: {
  display: ReactNode;
  frontend: ReactNode;
}) => {
  return (
    <div className={"h-full w-full"}>
      <div className={"h-full w-full flex"}>
        <div
          className={
            "r-frame w-1/3 h-2/3 p-8 border-yellow-400 border-8 t-0 l-0"
          }
          style={{ borderColor: "#60a5fa" }}
        >
          <div className={"flex"}>
            <div
              className={"r-frame w-full h-full p-2 border-yellow-400 border-8"}
            >
              <img
                src={"./logos/postgresql.svg"}
                alt={"Postgres"}
                className={"object-contain h-full w-full"}
              />
            </div>

            <div
              className={"r-frame w-full h-full p-2 border-yellow-400 border-8"}
            >
              <img
                src={"./logos/python.svg"}
                alt={"Python"}
                className={"object-contain h-full w-full"}
              />
            </div>
          </div>

          <div className={"flex"}>
            <div className={"w-full h-full p-2"}>
              <img
                src={"./logos/docker.svg"}
                alt={"Docker"}
                className={"object-contain h-full w-full"}
              />
            </div>
            <div
              className={"r-frame w-full h-full p-2 border-yellow-400 border-8"}
            >
              {frontend}
            </div>
          </div>
        </div>
        <div className={"z-10 ml-2"}>{display}</div>
        <div
          className={"w-80 h-80 r-frame top-1/3 left-3/4 absolute"}
          style={{ borderColor: "#ea580c" }}
        >
          <img
            src={"./logos/firefox.svg"}
            alt={"Firefox"}
            className={"object-contain h-full w-full"}
          />
        </div>
      </div>
    </div>
  );
};

export default Picture;
