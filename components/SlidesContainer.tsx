import Intro from "./Slides/00/Title";
import AboutPresentation from "./Slides/01/AboutPresentation";
import Agenda from "./Slides/02/Agenda";

const SlidesContainer = () => {
  return (
    <div className="slides">
      <Intro />
      <AboutPresentation />
      <Agenda />
    </div>
  );
};

export default SlidesContainer;
