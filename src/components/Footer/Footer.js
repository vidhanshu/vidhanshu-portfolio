import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
  AiOutlineVerified,
} from "react-icons/ai";
import { DiStackoverflow, DiCode } from "react-icons/di";
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
          <LinkItem href="tel: +917218555039"> 7218555039</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:vidhanshu7218555039@gmail.com">
            vidhanshu7218555039@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/vidhanshu">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/vidhanshu-borade-325741210/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://instagram.com/vidhanshu_borade">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.facebook.com/vidhanshu.borade.18/">
            <AiFillFacebook size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://stackoverflow.com/users/17539205/vidhanshu-borade">
            <DiStackoverflow size="3rem" />
          </SocialIcons>
          <SocialIcons href="https:/codechef.com/users/vidhanshu">
            <DiCode size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
