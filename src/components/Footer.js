import styled from "@emotion/styled";
import Container from "./Container";
import theme from "../styles/theme";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Section>
        <Filter />
        <Container>
          <FooterContainer>
            <Logo>F.B.R</Logo>
            <Content>
              <Title>Business Info</Title>
              <Nav>
                <li>
                  <ListItem href="mailto:info@boatrental.com">
                    info@boatrental.com
                  </ListItem>
                </li>
                <Li>8 AM - 6 PM Daily</Li>
                <li>
                  <ListItem href="tel:">1-800-544-2364</ListItem>
                </li>
                <Li>Book Online 24/7</Li>
              </Nav>
            </Content>
            <Content>
              <Title>Quick Links</Title>
              <Nav>
                <li>
                  <Link href="/">
                    <ListItem>Home</ListItem>
                  </Link>
                </li>
                <li>
                  <Link href="/rentals">
                    <ListItem>Rentals</ListItem>
                  </Link>
                </li>
                <li>
                  <Link href="/locations">
                    <ListItem>Locations</ListItem>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <ListItem>Contact</ListItem>
                  </Link>
                </li>
              </Nav>
            </Content>
          </FooterContainer>
        </Container>
      </Section>
      <Copyright>All Rights Reserved @ 2022</Copyright>
    </footer>
  );
}

// Styles
const Section = styled.div`
  background: url("/footer-img.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const Filter = styled.div`
  background: rgba(48, 82, 114, 0.8);
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  flex-direction: column;
  ${theme.mq()[1]} {
    flex-direction: row;
  }
`;

const Content = styled.div`
  z-index: 1;
`;

const Title = styled.h3`
  color: ${theme.colors.light};
  text-align: center;
  ${theme.mq()[1]} {
    text-align: left;
  }
`;

const Logo = styled.a`
  font-size: ${theme.fontSizes.heading}rem;
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.light};
  padding: 2rem 0;
  cursor: pointer;
  text-align: center;
  z-index: 1;
  &:hover {
    color: ${theme.colors.hover};
  }
  ${theme.mq()[1]} {
    padding: 5rem 0 0 1rem;
    text-align: left;
  }
  ${theme.mq()[2]} {
    padding: 5rem 10rem 0 1rem;
  }
`;

const Nav = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-gap: 3rem;
  padding: 0;
  grid-column-gap: 8rem;
  ${theme.mq()[1]} {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }
  ${theme.mq()[2]} {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 8rem;
    justify-items: left;
  }
`;

const ListItem = styled.a`
  color: ${theme.colors.light};
  cursor: pointer;
  &:hover {
    color: ${theme.colors.hover};
  }
`;

const Li = styled.li`
  color: ${theme.colors.light};
`;

const Copyright = styled.p`
  text-align: center;
`;
