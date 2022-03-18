import React from "react";
import {
  DiFirebase,
  DiReact,
  DiZend,
  DiCss3,
  DiHtml5,
  DiJavascript,
  DiCode,
  DiOpensource,
} from "react-icons/di";
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
    <SectionDivider space="5rem 0" />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From backend to Design
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Backend-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            node.js, php and Databases-mysql
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX Designer</ListTitle>
          <ListParagraph>
            Experience with <br />
            Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCss3 size="3rem" />
        <ListContainer>
          <ListTitle>CSS3</ListTitle>
          <ListParagraph>
            Experience with <br />
            CSS3
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiHtml5 size="3rem" />
        <ListContainer>
          <ListTitle>HTML5</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML5
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJavascript size="3rem" />
        <ListContainer>
          <ListTitle>ECMA script 6,7</ListTitle>
          <ListParagraph>
            Experience with <br />
            js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJavascript size="3rem" />
        <ListContainer>
          <ListTitle>C++</ListTitle>
          <ListParagraph>
            Experience with <br />
            c++
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJavascript size="3rem" />
        <ListContainer>
          <ListTitle>DSA</ListTitle>
          <ListParagraph>
            Experience with <br />
            Data structures and algorithms
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCode size="3rem" />
        <ListContainer>
          <ListTitle>Competative programming</ListTitle>
          <ListParagraph>
            Doing CP since {new Date().getFullYear() - 2021} year
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiOpensource size="3rem" />
        <ListContainer>
          <ListTitle>Open source</ListTitle>
          <ListParagraph>
            Doing OS contribution since {new Date().getFullYear() - 2021.5} year
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
