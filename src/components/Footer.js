import styled from "@emotion/styled";
import Container from "./Container";

export default function Footer() {
  return (
    <Container>
      <Box>All Rights Reserved @ 2022</Box>
    </Container>
  );
}

const Box = styled.footer`
  text-align: center;
`;
