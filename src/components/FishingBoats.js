import Container from "./Container";
import SectionTitle from "./SectionTitle";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import Image from "next/image";
import Button from "./Button";
import { GiCaptainHatProfile } from "react-icons/gi";
import { v4 as uuidv4 } from "uuid";
import { useQuery } from "react-query";
import axios from "axios";

export default function FishingBoats() {
  const getProducts = async () => {
    const products = await axios.get("http://localhost:5000/products/all");
    return products;
  };
  // Queries
  const { data: products, isLoading, isError } = useQuery("todos", getProducts);

  if (isLoading) {
    return (
      <Container>
        <h2>Loading...</h2>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <h2>Failed to load resource. There was a server error.</h2>
      </Container>
    );
  }
  return (
    <Section>
      <Container>
        <SectionTitle>Top Miami Fishing Boats</SectionTitle>
        <CardContainer>
          {/* Map over product data & display */}
          {products.data.map((product) => (
            <Card key={uuidv4()}>
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
                  <SubHeadingContainer>
                    <GiCaptainHatProfile />
                    <SubHeading>{product.subtitle}</SubHeading>
                  </SubHeadingContainer>
                </HeadingContainer>
              </ImageContainer>
              <Desc>{product.desc}</Desc>
              <BtnContainer>
                <Button border={true} link={`product/${product._id}`}>
                  LEARN MORE
                </Button>
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
  padding: ${theme.space[6]}rem 0;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5rem;
  ${theme.mq()[1]} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5rem;
  }
  ${theme.mq()[2]} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8rem;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
`;

const Desc = styled.p`
  padding: 1rem 0;
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

const SubHeadingContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  color: ${theme.colors.light};
`;

const SubHeading = styled.p`
  margin: 0;
  color: inherit;
  font-size: ${theme.fontSizes.small}rem;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem 1rem;
  ${theme.mq()[2]} {
    justify-content: space-between;
    flex-direction: row;
    padding: 0;
  }
`;
