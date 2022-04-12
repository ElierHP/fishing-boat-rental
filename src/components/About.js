import SectionTitle from "../components/SectionTitle";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import Container from "./Container";
import Button from "./Button";
import Image from "next/image";

export default function About() {
  return (
    <Section>
      <Filter />
      <Container>
        <ContentContainer>
          <Content>
            <SectionTitle color={theme.colors.light}>About Us</SectionTitle>
            <Paragraph>
              Our boat options are great for exploring the waters around Miami.
              Be the captain and drive it yourself. Our boat options are great
              for exploring the waters around Miami. Be the captain and drive it
              yourself.Our boat options are great for exploring the waters
              around Miami. Be the captain and drive it yourself.Our boat
              options are great for exploring the waters around Miami. Be the
              captain and drive it yourself.Our boat options are great for
              exploring the waters around Miami. Be the captain and drive it
              yourself.Our boat options are great for exploring the waters
              around Miami. Be the captain and drive it yourself.Our boat
              options are great for exploring the waters around Miami. Be the
              captain and drive it yourself.
            </Paragraph>
            <BtnContainer>
              <Button>SEE ALL BOATS AND RENTAL</Button>
            </BtnContainer>
          </Content>
          <ImageContainer>
            <Image
              alt="boat image"
              src="/product-1.jpg"
              layout="responsive"
              width={500}
              height={500}
              objectFit="contain"
              quality={100}
              priority={false}
            />
          </ImageContainer>
        </ContentContainer>
      </Container>
    </Section>
  );
}

// Styles
const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10rem;
`;

const Content = styled.div`
  width: 60ch;
  z-index: 2;
`;

const Section = styled.section`
  padding: ${theme.space[6]}rem 0;
  background: url("/product-1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-top: 4rem;
`;

const Filter = styled.div`
  background: rgba(48, 82, 114, 0.8);
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`;

const BtnContainer = styled.div`
  max-width: 300px;
  padding-top: 5rem;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
`;

const Paragraph = styled.p`
  color: ${theme.colors.light};
`;
