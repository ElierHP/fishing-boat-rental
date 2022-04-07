import styled from "@emotion/styled";

export default function Container({ children }) {
  return <Box>{children}</Box>;
}

// Styles
const Box = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 1.5rem;
`;
