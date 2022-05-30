import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

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
      <Button>
        <a href="mailto:sandipdeb05@gmail.com" style={{ color: "#fff" }}>
          Email Now
        </a>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
