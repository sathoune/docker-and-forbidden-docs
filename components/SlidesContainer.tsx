import Intro from "./Slides/00/Title";
import Agenda from "./Slides/02/Agenda";
import Overview from "./Slides/03/Overview";
import Docker from "./Slides/04/Docker";
import Compose from "./Slides/05/Compose";
import Title2 from "./Slides/00/Title2";
import Teaser from "./Slides/06/Teaser";
import Credits from "./Slides/07/Credits";

const SlidesContainer = () => {
  return (
    <div className="slides">
      <Intro />
      <Title2 />
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
