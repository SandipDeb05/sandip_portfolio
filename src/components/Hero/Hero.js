import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const mailTo = () => {
  location.href = "mailto:sandipdeb05@gmail.com";
};

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there,
        <br />I am Sandip Deb
      </SectionTitle>
      <SectionText>
        A Full-Stack Developer mainly focusing on Frontend Technologies like
        React, Redux, Next, and many more...
      </SectionText>
      <Button onClick={mailTo}>Email Now</Button>
    </LeftSection>
  </Section>
);

export default Hero;
