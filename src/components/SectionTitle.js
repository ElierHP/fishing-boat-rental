import styled from "@emotion/styled";
import theme from "../styles/theme";

export default function SectionTitle({
  children,
  color = theme.colors.dark,
  align = "left",
}) {
  return (
    <Section style={{ justifyContent: align }}>
      <Container>
        <Title style={{ color: color }}>{children}</Title>
        <Line></Line>
      </Container>
    </Section>
  );
}

// Styles
const Section = styled.div`
  display: flex;
`;

const Title = styled.h2`
  margin-top: 0;
`;

const Line = styled.div`
  height: 5px;
  width: 70px;
  background: ${theme.colors.primary};
  position: absolute;
  left: 0;
`;

const Container = styled.div`
  padding-bottom: 4rem;
  color: ${theme.colors.light};
  position: relative;
`;
