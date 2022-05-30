import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:8404069982">8404069982</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:sandipdeb05@gmail.com">
            sandipdeb05@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            If you have any opportunity for me, please reach out to me.
          </Slogan>
        </CompanyContainer>
      </SocialIconsContainer>

      <SocialContainer>
        <SocialIcons
          href="https://www.linkedin.com/in/sandip-deb-8b76b2157/"
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://github.com/SandipDeb05"
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://leetcode.com/Sandip_Deb/"
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <SiLeetcode size="3rem" />
        </SocialIcons>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
