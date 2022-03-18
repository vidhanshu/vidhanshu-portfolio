import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";
import SeparatorSVG from "./SeperatorSVG";
const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    if (node) return node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Section id="about">
        <SectionTitle>About Me</SectionTitle>
        <SectionText>
          My Aim is to achieve success by helping others by being part of their
          success.
        </SectionText>
        <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
          <>
            {TimeLineData.map((e, idx) => (
              <CarouselMobileScrollNode
                key={idx}
                final={idx === TOTAL_CAROUSEL_COUNT - 1}
              >
                <CarouselItem
                  index={idx}
                  id={`carousel_item=${idx}`}
                  active={activeItem}
                  onClick={(event) => handleClick(event, idx)}
                >
                  <CarouselItemTitle>
                    {e.year}
                    <SeparatorSVG />
                  </CarouselItemTitle>
                  <CarouselItemText>{e.text}</CarouselItemText>
                </CarouselItem>
              </CarouselMobileScrollNode>
            ))}
          </>
        </CarouselContainer>
        <CarouselButtons>
          {TimeLineData.map((e, idx) => (
            <CarouselButton
              key={idx}
              index={idx}
              active={activeItem}
              onClick={(event) => handleClick(event, idx)}
              type="button"
            >
              <CarouselButtonDot active={activeItem}></CarouselButtonDot>
            </CarouselButton>
          ))}
        </CarouselButtons>
        <SectionDivider space="3rem 0rem"></SectionDivider>
      </Section>
    </div>
  );
};

export default Timeline;
