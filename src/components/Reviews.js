import Container from "./Container";
import SectionTitle from "./SectionTitle";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import { AiFillStar } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

const reviews = [
  {
    id: 1,
    title: "Great Captain!",
    desc: "Our boat options are great for exploring the waters around Miami. Be the captain and drive it yourself. The waters around Miami. Be the captain.",
    rating: [1, 2, 3, 4, 5],
    author: "John Steward",
    key: uuidv4(),
  },
  {
    id: 2,
    title: "Fantastic Trip",
    desc: "Our boat options are great for exploring the waters around Miami. Be the captain and drive it yourself. The waters around Miami. Be the captain.",
    rating: [1, 2, 3, 4, 5],
    author: "John Steward",
    key: uuidv4(),
  },
  {
    id: 3,
    title: "Amazing Experience!",
    desc: "Our boat options are great for exploring the waters around Miami. Be the captain and drive it yourself. The waters around Miami. Be the captain.",
    rating: [1, 2, 3, 4],
    author: "John Steward",
    key: uuidv4(),
  },
];

const reviewDisplay = [
  { id: 10, reviewIds: [1, 2, 3], selected: true, key: uuidv4() },
];
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
              <CardTitle>{review.title}</CardTitle>
              {review.rating.map(() => (
                <AiFillStar
                  color={theme.colors.primary}
                  size={25}
                  key={uuidv4()}
                />
              ))}
              <p>{review.desc}</p>
              <Author>-{review.author}</Author>
            </Card>
          ))}
        </CardContainer>
        <Selector>
          {reviewDisplay.map((review) => {
            if (review.selected === true) {
              return <SelectedRectangle key={review.key} />;
            }
            return <Rectangle key={review.key} />;
          })}
        </Selector>
      </Container>
    </Section>
  );
}

// Styles
const Section = styled.section`
  padding: ${theme.space[8]}rem 0;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 6rem;
  margin-top: 2rem;
  ${theme.mq()[1]} {
    grid-template-columns: 1fr 1fr;
  }
  ${theme.mq()[2]} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Card = styled.div`
  padding: 2rem 3.5rem;
  box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.2);
`;

const CardTitle = styled.h3`
  margin-bottom: 1rem;
`;

const Author = styled.p`
  text-align: right;
  margin: 4rem 0 0 0;
`;

const Selector = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 5rem;
`;
const Rectangle = styled.div`
  width: 40px;
  height: 5px;
  background: #dddddd;
  display: inline-block;
`;

const SelectedRectangle = styled.div`
  width: 40px;
  height: 5px;
  background: ${theme.colors.primary};
  display: inline-block;
`;
