import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Post2() {
  return (
    <Fragment>
      <BodyContainer>
        <div>post2</div>
      </BodyContainer>
    </Fragment>
  );
}

export default Post2;
const BodyContainer = styled.div`
  margin-top: 100px;
  padding: 0px 100px;
  border: 3px dashed red;
  box-sizing: border-box;
  min-height: 1000px;
`;
