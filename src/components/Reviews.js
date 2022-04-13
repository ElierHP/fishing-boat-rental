import Container from "./Container";
import SectionTitle from "./SectionTitle";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import { AiFillStar } from "react-icons/ai";

const reviews = [
  {
    title: "Great Captain!",
    desc: "Our boat options are great for exploring the waters around Miami. Be the captain and drive it yourself. The waters around Miami. Be the captain.",
    rating: [1, 2, 3, 4, 5],
    author: "John Steward",
    key: 10,
  },
  {
    title: "Fantastic Trip",
    desc: "Our boat options are great for exploring the waters around Miami. Be the captain and drive it yourself. The waters around Miami. Be the captain.",
    rating: [1, 2, 3, 4, 5],
    author: "John Steward",
    key: 11,
  },
  {
    title: "Amazing Experience!",
    desc: "Our boat options are great for exploring the waters around Miami. Be the captain and drive it yourself. The waters around Miami. Be the captain.",
    rating: [1, 2, 3, 4],
    author: "John Steward",
    key: 12,
  },
];

console.log(reviews.length);
export default function Reviews() {
  return (
    <Section>
      <Container>
        <SectionTitle align="center">
          What our customers are saying!
        </SectionTitle>
        <CardContainer>
          {reviews.map((review) => (
            <Card key={review.key}>
              <h3>{review.title}</h3>
              {review.rating.map(() => (
                <AiFillStar color={theme.colors.primary} />
              ))}
              <p>{review.desc}</p>
              <p>-{review.author}</p>
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
  grid-gap: 6rem;
  margin-top: 2rem;
  ${theme.mq()[1]} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Card = styled.div`
  padding: 2rem 3.5rem;
  box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.2);
`;
