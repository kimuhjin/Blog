import React, { Fragment } from "react";
import { HashRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./Views/Header";
import PostsRender from "./Posts/PostsRender";
import Home from "./Views/Home";
import Footer from "./Views/Footer";
import Portfolios from "./Portfolios/Main";

function App() {
  return (
    <Fragment>
      <HashRouter>
        <Header />
        <PageContainer>
          <Route exact path="/" component={Home} />
          <Route exact path="/Portfolios" component={Portfolios} />
        </PageContainer>
        <PostsRender />
      </HashRouter>
      <Footer />
    </Fragment>
  );
}

export default App;

const PageContainer = styled.div`
  margin-top: 80px;
`;
