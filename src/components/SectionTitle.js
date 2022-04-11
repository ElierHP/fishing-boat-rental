import styled from "@emotion/styled";
import theme from "../styles/theme";

export default function SectionTitle({ children }) {
  return (
    <>
      <h2>{children}</h2>
      <Line></Line>
    </>
  );
}

// Styles
const Line = styled.div`
  height: 5px;
  width: 70px;
  background: ${theme.colors.primary};
`;
