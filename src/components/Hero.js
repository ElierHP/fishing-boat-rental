import Image from "next/image";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import Button from "./Button";

export default function Hero() {
  return (
    <Section>
      <Content>
        <Logo>F.B.R</Logo>
        <h1>Boat Rentals in Miami, FL!</h1>
        <BtnContainer>
          <Button>SEE ALL RENTALS & TOURS</Button>
        </BtnContainer>
      </Content>
      <BackgroundImage>
        <Image
          alt="hero image"
          src="/boat-home.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority={false}
        />
      </BackgroundImage>
    </Section>
  );
}

// Styles
const Section = styled.section`
  height: calc(100vh - 66.86px);
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  ${theme.mq()[1]} {
    height: calc(100vh - 56px);
  }
`;

const Content = styled.div`
  text-align: center;
`;

const Logo = styled.div`
  font-size: ${theme.fontSizes.mobileHeading}rem;
  font-weight: ${theme.fontWeights.bold};
  z-index: 10;
  margin-bottom: 1rem;
`;

const BackgroundImage = styled.div`
  z-index: -1;
`;

const BtnContainer = styled.div`
  padding: 0 1rem;
`;
