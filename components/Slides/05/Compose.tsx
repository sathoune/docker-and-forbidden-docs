import Title from "./Content/00-Title";
import Config from "./Content/01-Config";
import CLITips from "./Content/10-CLITips";
import Compose2 from "./Content/06-Compose2";
import Volumes from "./Content/03-Volumes";
import Networks from "./Content/02-Networks";
import Overrides from "./Content/04-Overrides";
import InitContainers from "./Content/05-InitContainers";
import Profiles from "./Content/07-Profiles";
import Makefile from "./Content/08-Makefile";
import Parametrize from "./Content/09-Parametrize";
import OverridesA from "./Content/04a-Overrides";
import OverridesB from "./Content/04b-Overrides";
import OverridesC from "./Content/04c-Overrides";
import VolumesB from "./Content/03b-Volumes";
import VolumesA from "./Content/03a-Volumes";
import ConfigA from "./Content/01a-Config";
import ConfigC from "./Content/01c-Config";
import ConfigB from "./Content/01b-Config";

const Compose = () => {
  return (
    <section>
      <Title />
      <Config />
      <ConfigA />
      <ConfigB />
      <ConfigC />
      <Networks />
      <Volumes />
      <VolumesA />
      <VolumesB />
      <Overrides />
      <OverridesA />
      <OverridesB />
      <OverridesC />
      <InitContainers />
      <Compose2 />
      <Profiles />
      <Makefile />
      <Parametrize />
      <CLITips />
      <aside className={"notes"}></aside>
    </section>
  );
};

export default Compose;
