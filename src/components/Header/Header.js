import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "#fff",
            marginBottom: "20px",
          }}
        >
          <Span>Sandip</Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
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
    </Div3>
  </Container>
);

export default Header;
