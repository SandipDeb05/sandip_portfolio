import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const onButtonClick = () => {
  fetch("sandip-resume.pdf").then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "sandip-resume.pdf";
      alink.click();
    });
  });
};

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there,
        <br />I am Sandip Deb
      </SectionTitle>
      <SectionText>
        A Full-Stack Developer focusing on JavaScript, React, Redux, Next, MERN
        Stack and many more...
      </SectionText>
      <Button onClick={onButtonClick}>Download resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;
