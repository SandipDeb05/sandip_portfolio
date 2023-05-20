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
        I specialize in React and the MERN stack, which includes MongoDB,
        Express, React, and Node. With years of experience in software
        development, I have honed my expertise in creating dynamic and
        responsive web applications using these technologies. I have a proven
        track record of developing top-quality web applications and managing
        projects from conception to launch. My technical proficiency, combined
        with my ability to work effectively in a team, enables me to create
        solutions that are scalable, secure, and high-performing. I am always
        learning and expanding my knowledge of new technologies and industry
        best practices. <br />
        Technology Stack: HTML, CSS, JavaScript, React, Redux, React-Router,
        Next, MERN stack.
      </SectionText>
    </Section>
  );
};

export default Timeline;
