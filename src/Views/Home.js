import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HeroImage from "../Components/HeroImage";
function Home() {
  const Posts = [
    {
      Title: "첫 글",
      Article: "첫 글입니다.",
      Time: "6월 15일",
      Post: "Post1",
    },
    {
      Title: "두번째 글",
      Article: "두번째 글입니다.",
      Time: "6월 15일",
      Post: "Post2",
    },
  ];
  const RanderPosts = Posts.map((data) => {
    return (
      <PostBox to={data.Post}>
        <Title>{data.Title}</Title>
        <Article>{data.Article}</Article>
        <Time>{data.Time}</Time>
      </PostBox>
    );
  });
  return (
    <Fragment>
      <HeroImage />
      <BodyContainer>
        <PostsContainer>
          <Category>전체 게시물 ({Posts.length})</Category>
          {RanderPosts}
        </PostsContainer>
      </BodyContainer>
    </Fragment>
  );
}

export default Home;

const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 50px;

  height: 100px;
  font-size: 28px;
  color: gray;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 10px;
  color: black;
  &:hover {
    color: gray;
  }
`;
const Article = styled.div`
  font-size: 16px;
  margin: 10px;
  color: black;
`;
const Time = styled.div`
  font-size: 12px;
  margin: 10px;
  color: black;
`;

const PostBox = styled(Link)`
  display: block;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.18);
  padding: 30px;
  border-radius: 20px;
  margin-bottom: 30px;
`;

const PostsContainer = styled.div`
  padding: 20px;
`;
const BodyContainer = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    max-width: 100%;
    margin-left: 0px;
    margin-right: 0px;
  }
`;
