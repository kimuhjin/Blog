import React, { Fragment } from "react";
import styled from "styled-components";
function Post1() {
  return (
    <Fragment>
      <BodyContainer>
        <Title>첫 글 </Title>
        <Time>2020.06.15</Time>
        <Hr />
        <Article>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </Article>
      </BodyContainer>
    </Fragment>
  );
}

export default Post1;
const Article = styled.div`
  font-size: 18px;
  color: black;
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
