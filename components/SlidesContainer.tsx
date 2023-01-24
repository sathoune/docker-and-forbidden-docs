import Intro from "./Slides/00/Title";
import Agenda from "./Slides/02/Agenda";
import Overview from "./Slides/03/Overview";

const SlidesContainer = () => {
  return (
    <div className="slides">
      <Intro />
      <Agenda />
      <Overview />
    </div>
  );
};

export default SlidesContainer;
