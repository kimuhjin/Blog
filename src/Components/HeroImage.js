import React, { Fragment } from "react";
import styled from "styled-components";
function HeroImage() {
  return (
    <Fragment>
      <Image>
        <LinkButton>
          <Title>Portfolios</Title>
        </LinkButton>
      </Image>
    </Fragment>
  );
}

export default HeroImage;
const Title = styled.div`
  font-family: "Orbitron", sans-serif;
  font-size: 20px;
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
  &:hover {
    opacity: 1;
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
`;
