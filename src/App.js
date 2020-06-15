import React, { Fragment } from "react";
import { HashRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./Views/Header";
import HeroImage from "./Components/HeroImage";
import Home from "./Views/Home";
import Footer from "./Views/Footer";
import Post1 from "./Posts/Post1";
import Post2 from "./Posts/Post2";

function App() {
  return (
    <Fragment>
      <HashRouter>
        <Header />
        <HeroImage />
        <PageContainer>
          <PageBox>
            <Route exact path="/" component={Home} />
            <Route exact path="/Post1" component={Post1} />
            <Route exact path="/Post2" component={Post2} />
          </PageBox>
        </PageContainer>
      </HashRouter>
      <Footer />
    </Fragment>
  );
}

export default App;

const PageBox = styled.div``;
const PageContainer = styled.div`
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    max-width: 100%;
    margin-left: 0px;
    margin-right: 0px;
  }
`;
