import React from "react";
import { useState } from "react";
import {
  HeaderThree,
  Hr,
  TitleContent,
  Img,
  ImgContainer,
  Overlay,
  OverlayImage,
} from "./CertificateStyle";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
function Blog({ image, date, title, position }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && (
        <Overlay>
          <OverlayImage>
            <span
              onClick={() => {
                setOpen(false);
              }}
            >
              X
            </span>
            <img src={image} />
          </OverlayImage>
        </Overlay>
      )}
      <ImgContainer>
        <Img
          src={image}
          onClick={() => {
            setOpen(true);
          }}
        />
      </ImgContainer>
      <TitleContent>
        <HeaderThree title={title}></HeaderThree>
        <Hr />
      </TitleContent>
      <SectionText>Position: {position}</SectionText>
      <SectionText>Date: {date}</SectionText>
    </>
  );
}

export default Blog;
