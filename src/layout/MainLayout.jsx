import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Container } from "reactstrap";
import ThemeContext from "../components/ThemeContext.jsx";

const MainLayout = (props) => {
  const { children, title } = props;

  const { isDarkMode } = React.useContext(ThemeContext);

  return (
    <Container fluid  
      className={
        isDarkMode ? "container-dm mt-2 mb-3" : "container-lt mt-2 mb-3"
      }
    >
      <Header className="heading mt-4">
        <h1 className={isDarkMode ? "h1-dm" : "h1-lt"}>{title}</h1>
      </Header>
      {children}
      <Footer />
    </Container>
  );
};

export default MainLayout;
