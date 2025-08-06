import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const onButtonClick = () => {
  fetch("sandip_deb_resume.pdf").then((response) => {
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
        Experienced software developer specializing in JavaScript and React.
        Proficient in crafting dynamic and responsive web applications through
        years of expertise in software development.
      </SectionText>
      <Button onClick={onButtonClick}>Download Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;
