import styled from "@emotion/styled";
import Link from "next/link";
import theme from "../styles/theme";

export default function Button({ children, border }) {
  // Styles

  const Btn = styled.a`
    display: inline-block;
    background-color: ${border ? theme.colors.light : theme.colors.primary};
    color: ${border ? theme.colors.primary : theme.colors.light};
    padding: 1rem 1.5rem;
    border-radius: 0.3rem;
    border: 4px solid ${theme.colors.primary};
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    width: 100%;
    &:hover {
      background-color: ${theme.colors.btnHover};
      border: 4px solid ${theme.colors.btnHover};
      color: ${theme.colors.light};
    }
  `;
  return (
    <Link href="/">
      <Btn>{children}</Btn>
    </Link>
  );
}
