import Image from "next/image";
import styled from "@emotion/styled";
import theme from "../styles/theme";

export default function Hero() {
  return (
    <Section>
      <Content>
        <Logo>F.B.R</Logo>
        <h1>Boat Rentals in Miami, FL!</h1>
      </Content>
      <BackgroundImage
        alt="hero image"
        src="/boat-home.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority={true}
      />
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
  ${theme.mq()[1]} {
    height: calc(100vh - 56px);
  }
`;

const Content = styled.div`
  text-align: center;
`;

const Logo = styled.div`
  font-size: ${theme.fontSizes.large}rem;
  font-weight: ${theme.fontWeights.bold};
  z-index: 10;
`;

const BackgroundImage = styled(Image)`
  z-index: -1;
  position: absolute;
  top: 0;
`;
