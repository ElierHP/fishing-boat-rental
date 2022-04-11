import Container from "./Container";
import SectionTitle from "./SectionTitle";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import Image from "next/image";
import Button from "./Button";

const products = [
  {
    title: '21" Hurricane Fishing Boat  ',
    subtitle: "Captain Included",
    desc: "Our boat options are great for exploring the waters around Miami. Be the captain and drive it yourself.",
    key: 0,
  },
  {
    title: '21" Hurricane Fishing Boat  ',
    subtitle: "Captain Included",
    desc: "Our boat options are great for exploring the waters around Miami. Be the captain and drive it yourself.",
    key: 1,
  },
  {
    title: '21" Hurricane Fishing Boat  ',
    subtitle: "Captain Included",
    desc: "Our boat options are great for exploring the waters around Miami. Be the captain and drive it yourself.",
    key: 2,
  },
  {
    title: '21" Hurricane Fishing Boat  ',
    subtitle: "Captain Included",
    desc: "Our boat options are great for exploring the waters around Miami. Be the captain and drive it yourself.",
    key: 3,
  },
  {
    title: '21" Hurricane Fishing Boat  ',
    subtitle: "Captain Included",
    desc: "Our boat options are great for exploring the waters around Miami. Be the captain and drive it yourself.",
    key: 4,
  },
  {
    title: '21" Hurricane Fishing Boat  ',
    subtitle: "Captain Included",
    desc: "Our boat options are great for exploring the waters around Miami. Be the captain and drive it yourself.",
    key: 5,
  },
];

export default function FishingBoats() {
  return (
    <Section>
      <Container>
        <SectionTitle>Top Miami Fishing Boats</SectionTitle>
        <CardContainer>
          {products.map((product) => (
            <Card key={product.key}>
              <ImageContainer>
                <Image
                  alt="boat image"
                  src="/product-1.jpg"
                  layout="responsive"
                  height={800}
                  width={1000}
                  quality={100}
                  priority={false}
                />
                <HeadingContainer>
                  <Heading>{product.title}</Heading>
                  <SubHeading>{product.subtitle}</SubHeading>
                </HeadingContainer>
              </ImageContainer>
              <p>{product.desc}</p>
              <BtnContainer>
                <Button border={true}>LEARN MORE</Button>
                <Button>BOOK NOW</Button>
              </BtnContainer>
            </Card>
          ))}
        </CardContainer>
      </Container>
    </Section>
  );
}

// Styles
const Section = styled.section`
  padding: ${theme.space[3]}rem 0;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5rem;
  padding: 4rem 0;
  ${theme.mq()[1]} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5rem;
  }
  ${theme.mq()[2]} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5rem;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
`;

const HeadingContainer = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 1;
  color: ${theme.colors.light};
  background-color: ${theme.colors.primary};
  width: 100%;
  padding: 1rem 1rem;
  ${theme.mq()[1]} {
    padding: 1rem 1.5rem;
  }
`;
const Heading = styled.h3`
  margin: 0;
  color: inherit;
`;

const SubHeading = styled.p`
  margin: 0;
  color: inherit;
  font-size: ${theme.fontSizes.small}rem;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
