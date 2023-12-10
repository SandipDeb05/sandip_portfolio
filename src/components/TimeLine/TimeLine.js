import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Timeline = () => {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I specialize in JavaScript and React. With years of experience in
        software development, I have honed my expertise in creating dynamic and
        responsive web applications using these technologies. I am constantly
        learning and expanding my knowledge of new technologies and industry
        best practices. I am the right person for the job if you're looking for
        a skilled and motivated developer with experience in front-end
        development. <br />
        Technologies: HTML, CSS, JavaScript, React, Redux, React-Router, git.
      </SectionText>
    </Section>
  );
};

export default Timeline;
