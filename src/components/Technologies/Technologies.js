import React from "react";
import { DiFirebase, DiReact } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of Technologies in the Web Development world from
      Frontend to Backend.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            Experience with <br /> React and Next
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Experience with <br /> Spring Boot and databases
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <FiFigma size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Familiar with <br /> tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
