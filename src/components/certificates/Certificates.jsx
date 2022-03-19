import React from "react";
import Link from "next/link";
import {
  BlogCard,
  GridContainer,
  MyBtn,
  Section,
  Flex,
} from "./CertificateStyle";
import { SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import { certificates } from "../../constants/constants";
import Blog from "./Blog";
const CertificateComp = () => {
  return (
    <Section id="projects">
      <SectionDivider />
      <Flex>
        <Link href="/">
          <MyBtn>back to home</MyBtn>
        </Link>
      </Flex>
      <SectionTitle main> Certificates </SectionTitle>
      <GridContainer>
        {certificates.map(({ image, date, title, position }, id) => {
          return (
            <BlogCard key={id}>
              <Blog
                image={image}
                date={date}
                title={title}
                position={position}
              ></Blog>
            </BlogCard>
          );
        })}
      </GridContainer>
      <Link href="/">
        <MyBtn>back to home</MyBtn>
      </Link>
    </Section>
  );
};

export default CertificateComp;
