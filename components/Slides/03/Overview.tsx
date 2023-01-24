import Title from "./Content/00-Title";
import WhatIsIt from "./Content/01-WhatIsIt";
import React from "react";
import WhyNotUseIt from "./Content/03-WhyNotUseIt";
import WhyUseIt from "./Content/02-WhyUseIt";

const Overview = () => {
  return (
    <section>
      <Title />
      <WhatIsIt />
      <WhyUseIt />
      <WhyNotUseIt />
      <aside className={"notes"}></aside>
    </section>
  );
};

export default Overview;
