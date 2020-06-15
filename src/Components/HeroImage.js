import React, { Fragment } from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

function HeroImage() {
  return (
    <Fragment>
      <Image>
        <LinkButton>
          <Link href="https://github.com/kimuhjin">
            <AiFillGithub size={40} />
          </Link>
        </LinkButton>
        <LinkButton>
          <Title>Portfolios</Title>
        </LinkButton>
        <LinkButton>
          <Link href="https://www.instagram.com/kimuhjin__/">
            <AiFillInstagram size={40} />
          </Link>
        </LinkButton>
      </Image>
    </Fragment>
  );
}

export default HeroImage;
const Link = styled.a`
  cursor: pointer;
  &:link {
    color: black;
  }
  &:visited {
    color: black;
  }
`;
const Title = styled.div`
  font-family: "Orbitron", sans-serif;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const LinkButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 70px;
  background-color: white;
  opacity: 0.8;
  border: 1px solid white;
  border-radius: 10px;
  transition: opacity 0.6s ease;
  margin: 0px 10px;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 768px) {
    width: 130px;
    height: 50px;
  }
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  width: 100%;
  height: 500px;
  background-image: url("https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2013&q=80");
  background-repeat: no-repeat;
  background-size: 100% 500px;
  @media (max-width: 768px) {
    height: 300px;
    background-size: 100% 300px;
  }
`;
