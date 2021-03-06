import styled from "@emotion/styled";
import { IoMenu } from "react-icons/io5";
import Container from "./Container";
import theme from "../styles/theme";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <NavBar>
        <Container>
          <Nav>
            {/* Logo */}
            <Link href="/">
              <Logo>F.B.R</Logo>
            </Link>

            {/* Mobile */}
            <IconButton>
              <IoMenu fontSize={40} />
            </IconButton>

            {/* Desktop */}
            <Lists>
              {/* Site Navigation */}
              <List>
                <li>
                  <Link href="/">
                    <Anchor>Home</Anchor>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <Anchor>Rentals</Anchor>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <Anchor>Locations</Anchor>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <Anchor>Contact</Anchor>
                  </Link>
                </li>
              </List>
              {/* User Links */}
              <List>
                <Link href="/">
                  <Anchor>Sign In</Anchor>
                </Link>
                <Link href="/">
                  <Anchor>Register</Anchor>
                </Link>
              </List>
            </Lists>
          </Nav>
        </Container>
      </NavBar>
    </>
  );
}

// Styles
const NavBar = styled.header`
  background: ${theme.colors.light};
  border-bottom: 0.4rem solid ${theme.colors.dark};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const Logo = styled.a`
  font-size: 3.2rem;
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.dark};
  cursor: pointer;
  &:hover {
    color: ${theme.colors.primary};
  }
`;

const IconButton = styled.div`
  color: inherit;
  display: block;
  ${theme.mq()[1]} {
    display: none;
  }
`;

const Lists = styled.div`
  display: none;
  ${theme.mq()[1]} {
    display: flex;
    gap: 4rem;
  }
  ${theme.mq()[2]} {
    display: flex;
    gap: 12rem;
  }
`;

const List = styled.ul`
  display: none;
  margin: 0;
  padding: 0;
  ${theme.mq()[1]} {
    display: flex;
    gap: 3rem;
  }
`;

const Anchor = styled.a`
  color: ${theme.colors.dark};
  cursor: pointer;
  font-size: 2rem;
  &:hover {
    color: ${theme.colors.primary};
  }
`;
