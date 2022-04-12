import styled from "@emotion/styled";
import theme from "../styles/theme";

export default function SectionTitle({ children, color = theme.colors.dark }) {
  return (
    <Title>
      <h2 style={{ color: color, marginTop: 0 }}>{children}</h2>
      <Line></Line>
    </Title>
  );
}

// Styles
const Line = styled.div`
  height: 5px;
  width: 70px;
  background: ${theme.colors.primary};
`;

const Title = styled.div`
  padding-bottom: 4rem;
  color: ${theme.colors.light};
`;
