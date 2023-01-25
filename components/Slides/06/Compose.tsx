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
import InitContainersA from "./Content/05a-InitContainers";
import InitContainersB from "./Content/05b-InitContainers";
import ProfilesA from "./Content/07a-Profiles";
import ProfilesB from "./Content/07b-Profiles";
import ProfilesC from "./Content/07c-Profiles";
import ProfilesD from "./Content/07d-Profiles";
import ProfilesE from "./Content/07e-Profiles";
import MakefileA from "./Content/08a-Makefile";
import MakefileB from "./Content/08b-Makefile";
import TitleA from "./Content/00a-Title";

const Compose = () => {
  return (
    <section>
      <Title />
      <TitleA />
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
      <InitContainersA />
      <InitContainersB />
      <Compose2 />
      <Profiles />
      <ProfilesA />
      <ProfilesB />
      <ProfilesC />
      <ProfilesD />
      <ProfilesE />
      <Makefile />
      <MakefileA />
      <MakefileB />
      <Parametrize />
      <CLITips />
      <aside className={"notes"}></aside>
    </section>
  );
};

export default Compose;
