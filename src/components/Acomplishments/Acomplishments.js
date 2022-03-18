import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: "16+", text: "Open Source Projects" },
  { number: 19, text: "subscribers" },
  { number: 2, text: "Github Followers" },
  { number: 1, text: "Certificate" },
  { number: "1 star coder", text: "Codechef" },
  { number: "1502", text: "Highest rating on codechef" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal accomplishements</SectionTitle>
    <Boxes>
      {data.map((e, idx) => (
        <Box key={idx}>
          <BoxNum>{e.number}</BoxNum>
          <BoxText>{e.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
