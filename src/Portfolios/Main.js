import React, { Fragment } from "react";
import styled from "styled-components";
function Main() {
  return (
    <Fragment>
      <PortContainer>
        <PortBox>
          <WorkContainer>
            <Title>Only-FrontEnd</Title>
            <WorkBox>
              <Work />
              <Work />
              <Work />
            </WorkBox>
          </WorkContainer>
          <WorkContainer>
            <Title>Full-Stack</Title>
            <WorkBox>
              <Work />
              <Work />
              <Work />
            </WorkBox>
          </WorkContainer>
        </PortBox>
      </PortContainer>
    </Fragment>
  );
}

export default Main;
const Work = styled.div`
  cursor: pointer;
  margin: 30px 30px;
  width: 200px;
  height: 200px;
  border: 2px solid black;
  box-sizing: border-box;
  background-color: yellowgreen;
  margin-bottom: 50px;
  transition: transform 0.5s;
  -webkit-transform: translate3d(0, 0, 0);
  /* -webkit-backface-visibility: hidden; */
  &:hover {
    transform: perspective(600px) rotateY(30deg);
  }
`;
const WorkBox = styled.div`
  display: flex;
  /* align-items: flex-start; */
  flex-wrap: wrap;
  border: 2px solid green;
  box-sizing: border-box;
  margin-bottom: 30px;
  /* @media (max-width: 764px) {
    flex-direction: column;
  } */
`;

const Title = styled.div`
  font-size: 28px;
  font-family: "Orbitron", sans-serif;
  margin-bottom: 30px;
`;

const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PortBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 1000px;
  padding: 50px 50px;
  border: 3px solid blue;
  box-sizing: border-box;
`;
const PortContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 10px;
  max-width: 1200px;
  min-height: 1000px;
  border: 4px solid red;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    max-width: 100%;
    margin-left: 0px;
    margin-right: 0px;
  }
`;
