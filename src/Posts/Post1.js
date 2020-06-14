import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Post1() {
  return (
    <Fragment>
      <BodyContainer>
        <div>111</div>
      </BodyContainer>
    </Fragment>
  );
}

export default Post1;
const BodyContainer = styled.div`
  margin-top: 100px;
  padding: 0px 100px;
  border: 3px dashed red;
  box-sizing: border-box;
  min-height: 1000px;
`;
