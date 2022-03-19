import React from "react";
import Link from "next/link";
import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
const data = [
  {
    number: "16+",
    text: "Open Source Projects",
    link: "https://github.com/vidhanshu",
  },
  {
    number: "19+",
    text: "subscribers",
    link: "https://www.youtube.com/channel/UC5UYmgXN0KRvS8s1TXWdzhg",
  },
  {
    number: "2+",
    text: "Github Followers",
    link: "https://github.com/vidhanshu",
  },
  { number: "3+", text: "Certificate", link: "/Certificates" },
  {
    number: "1 star coder",
    text: "Codechef",
    link: "https://www.codechef.com/users/vidhanshu",
  },
  {
    number: "1509",
    text: "Highest rating on codechef",
    link: "https://www.codechef.com/users/vidhanshu",
  },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal accomplishements</SectionTitle>
    <Boxes>
      {data.map((e, idx) => (
        <Link key={idx} href={e.link}>
          <Box key={idx}>
            <BoxNum>{e.number}</BoxNum>
            <BoxText>{e.text}</BoxText>
          </Box>
        </Link>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
