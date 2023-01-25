import Title from "./Content/00-Title";
import WhatIsIt from "./Content/01-WhatIsIt";
import React from "react";
import WhyNotUseIt from "./Content/04-WhyNotUseIt";
import WhyUseItAsDX from "./Content/02-WhyUseItAsDX";
import WhyUseItAsDevOps from "./Content/03-WhyUseIt";

const Overview = () => {
  return (
    <section>
      <Title />
      <WhatIsIt />
      <WhyUseItAsDX />
      <WhyUseItAsDevOps />
      <WhyNotUseIt />
      <aside className={"notes"}></aside>
    </section>
  );
};

export default Overview;
