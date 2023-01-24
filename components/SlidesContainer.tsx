import Intro from "./Slides/00/Title";
import Agenda from "./Slides/02/Agenda";
import Overview from "./Slides/03/Overview";
import Docker from "./Slides/04/Docker";
import Compose from "./Slides/05/Compose";
import Production from "./Slides/06/Production";
import Title2 from "./Slides/00/Title2";

const SlidesContainer = () => {
  return (
    <div className="slides">
      <Intro />
      <Title2 />
      <Agenda />
      <Overview />
      <Docker />
      <Compose />
      <Production />
    </div>
  );
};

export default SlidesContainer;
