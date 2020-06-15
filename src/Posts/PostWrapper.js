import React, { Fragment } from "react";
import styled from "styled-components";
function Image(props) {
  return <img {...props} style={{ maxWidth: "100%" }} />;
}

function PostWrapper({ text, title, time }) {
  const Md = require("react-markdown");

  return (
    <Fragment>
      <BodyContainer>
        <Title>{title}</Title>
        <Time>{time}</Time>
        <Article>
          <Md source={text} renderers={{ image: Image }} />
        </Article>
      </BodyContainer>
    </Fragment>
  );
}

export default PostWrapper;

const Article = styled.div`
  border: 1px solid lightgray;
  border-left: 0px;
  border-right: 0px;
  padding: 70px 0px;
  overflow: scroll;
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
  padding: 100px 10px;
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
