import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./Views/Header";
import Home from "./Views/Home";
import Footer from "./Views/Footer";
import Post1 from "./Posts/Post1";
import Post2 from "./Posts/Post2";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Post1" component={Post1} />
        <Route exact path="/Post2" component={Post2} />
      </BrowserRouter>
      <Footer />
    </Fragment>
  );
}

export default App;
