import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";
import WhoIAm from "./WhoIAm";
const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My personal Portfolio
      </SectionTitle>
      <SectionText>
        My Aim is to achieve success by helping others by being part of their
        success.
      </SectionText>
      <WhoIAm></WhoIAm>
    </LeftSection>
  </Section>
);

export default Hero;
