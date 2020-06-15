import React, { Fragment } from "react";
import styled from "styled-components";

function PostWrapper({ text, title, time }) {
  const Md = require("react-markdown");

  return (
    <Fragment>
      <BodyContainer>
        <Title>{title}</Title>
        <Time>{time}</Time>
        <Hr />
        <Article>
          <Md source={text} />
        </Article>
      </BodyContainer>
    </Fragment>
  );
}

export default PostWrapper;
const Article = styled.div`
  padding: 70px 0px;
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
