import React, { Fragment } from "react";
import { HashRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./Views/Header";
import PostsRender from "./Posts/PostsRender";
import Home from "./Views/Home";
import Footer from "./Views/Footer";

function App() {
  return (
    <Fragment>
      <HashRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <PostsRender />
      </HashRouter>
      <Footer />
    </Fragment>
  );
}

export default App;

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
