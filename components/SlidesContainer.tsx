import Intro from "./Slides/00/Title";
import Agenda from "./Slides/03/Agenda";
import Overview from "./Slides/04/Overview";
import Docker from "./Slides/05/Docker";
import Compose from "./Slides/06/Compose";
import Title2 from "./Slides/00/Title2";
import Teaser from "./Slides/07/Teaser";
import Credits from "./Slides/08/Credits";
import BigAgenda from "./Slides/02/BigAgenda";

const SlidesContainer = () => {
  return (
    <div className="slides">
      <Intro />
      <Title2 />
      <BigAgenda />
      <Agenda />
      <Overview />
      <Docker />
      <Compose />
      <Teaser />
      <Credits />
    </div>
  );
};

export default SlidesContainer;
