import Image from "next/image";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import Button from "./Button";

export default function Hero() {
  return (
    <Section>
      <Content>
        <h1>Boat Rentals in Miami, FL!</h1>
        <BtnContainer>
          <Button>SEE ALL RENTALS & TOURS</Button>
        </BtnContainer>
      </Content>
      <Filter />
      <BackgroundImage>
        <Image
          alt="hero image"
          src="/boat-home.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority={true}
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
  padding: 0 2rem;
  z-index: 1;
`;

const Filter = styled.div`
  background: rgba(48, 82, 114, 0.1);
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`;

const BackgroundImage = styled.div`
  z-index: -1;
`;

const BtnContainer = styled.div`
  padding-top: 1rem;
`;
