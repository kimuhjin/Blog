import { Route } from "react-router-dom";
import React, { Fragment } from "react";

import Post1 from "./Post1";
import Post2 from "./Post2";
import Post3 from "./Post3";

function PostsRender() {
  return (
    <Fragment>
      <Route exact path="/Post1" component={Post1} />
      <Route exact path="/Post2" component={Post2} />
      <Route exact path="/Post3" component={Post3} />
    </Fragment>
  );
}

export default PostsRender;
