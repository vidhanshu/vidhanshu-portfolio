import styled from "styled-components";
export const Section = styled.section`
  display: ${(props) => (props.grid ? "grid" : "flex")};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  padding: 52px 48px;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
`;

export const Img = styled.img`
  transition: 0.3s all;
`;
export const ImgContainer = styled.div`
  height: 250px;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
  }
`;
export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 1rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  border: 1px solid rgba(100, 78, 78, 0.5);
  transition: 0.3s all;
  &:hover {
    border: 1px solid rgba(256, 256, 256, 0.5);
  }
  background-color: #171717 !important;
  overflow: hidden;
  text-align: center;
  max-width: 400px;
  height: fit-content;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  margin-top: 2rem;
  color: grey;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export const OverlayImage = styled.div`
  height: 100vh;
  backdrop-filter: blur(1rem);
  img {
    width: 90%;
    max-height: 90%;
  }
  span {
    position: absolute;
    top: 1rem;
    right: 2rem;
    font-size: 3rem;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyBtn = styled.button`
  padding: 8px 16px;
  margin: 3rem auto;
  background: blue;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: right;
  button {
    margin: 0;
    transform: translateY(-20px);
  }
`;
