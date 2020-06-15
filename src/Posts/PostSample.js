import React, { Fragment } from "react";
import styled from "styled-components";

function PostSample() {
  const Md = require("react-markdown");
  const text = `
### 샘플
  `;
  return (
    <Fragment>
      <BodyContainer>
        <Title>### </Title>
        <Time>2020.##.##</Time>
        <Hr />
        <Md source={text} />
      </BodyContainer>
    </Fragment>
  );
}

export default PostSample;
const Article = styled.div`
  font-size: 18px;
  color: black;
  padding: 100px 0px;
`;

const Hr = styled.div`
  border-top: 1px solid lightgray;
`;
const Title = styled.div`
  font-size: 30px;
  margin-bottom: 10px;
`;
const Time = styled.div`
  font-size: 14px;
  color: gray;
  margin-bottom: 10px;
`;

const BodyContainer = styled.div`
  padding: 100px 0;
  margin-top: 80px;
  max-width: 1000px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    max-width: 100%;
    margin-left: 0px;
    margin-right: 0px;
  }
`;
