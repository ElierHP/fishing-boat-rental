import Footer from "./Footer";
import Header from "./Header";
import styled from "@emotion/styled";
import theme from "../styles/theme";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

// Styles
const Main = styled.main`
  height: calc(100vh - 66.86px);
  ${theme.mq()[1]} {
    height: calc(100vh - 56px);
  }
`;
