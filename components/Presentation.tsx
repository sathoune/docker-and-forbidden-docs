// @ts-ignore
import Reveal from "reveal.js";
// @ts-ignore
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm.js";
import { useEffect } from "react";
import RevealRemote from "../remote/plugin";
import SlidesContainer from "./SlidesContainer";

const Presentation = () => {
  useEffect(() => {
    // To avoid reinitialization with react strict mode
    if (Reveal.hasPlugin && Reveal.hasPlugin("RevealRemote")) {
      return;
    }
    Reveal.initialize({
      width: "100%",
      height: "100%",
      controls: true,
      progress: true,
      history: true,
      center: true,
      transition: "slide",
      remote: {
        remote: true,
        path: "/api/socket",
      },
      plugins: [RevealRemote(), RevealHighlight()],
    });
  }, []);
  return (
    <div className="reveal">
      <SlidesContainer />
    </div>
  );
};

export default Presentation;
