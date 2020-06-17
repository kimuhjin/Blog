import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
function Main() {
  const WorkInfo = [
    { id: "1", title: "front_1", desc: "abcd1" },
    { id: "2", title: "front_2", desc: "abcd2" },
    { id: "3", title: "front_3", desc: "abcd3" },
    { id: "4", title: "fullstack_1", desc: "abcd1" },
  ];
  const [clicked, setClicked] = useState(false);
  const [WorkId, setWorkId] = useState(0);

  const onclick = (e) => {
    setClicked(!clicked);
    setWorkId(e.target.value);
    console.log(e.target.value);
  };

  const ShowWork = WorkInfo.map((data) => {
    if (WorkId === data.id) {
      return (
        <Fragment>
          <DetailContainer>
            <DescBox>{data.title}</DescBox>
            <StackBox>{data.desc}</StackBox>
          </DetailContainer>
        </Fragment>
      );
    }
  });

  return (
    <Fragment>
      {clicked && (
        <Fragment>
          <WorkDetailContainer>
            <WorkDetailBox>
              <ButtonSection>
                <CloseButton onClick={onclick}>
                  <MdClose size={22} />
                </CloseButton>
              </ButtonSection>
              {ShowWork}
            </WorkDetailBox>
          </WorkDetailContainer>
        </Fragment>
      )}
      <PortContainer>
        <PortBox>
          <WorkContainer>
            <Title>Only-FrontEnd</Title>
            <WorkBox>
              <Work onClick={onclick} value={1} />
              <Work onClick={onclick} value={2} />
              <Work onClick={onclick} value={3} />
            </WorkBox>
          </WorkContainer>
          <WorkContainer>
            <Title>Full-Stack</Title>
            <WorkBox>
              <Work onClick={onclick} value={4} />
            </WorkBox>
          </WorkContainer>
        </PortBox>
      </PortContainer>
    </Fragment>
  );
}

export default Main;
const StackBox = styled.div`
  width: 100%;
  height: 390px;
  border: 2px solid blue;
  box-sizing: border-box;
`;
const DescBox = styled.div`
  width: 100%;
  height: 200px;
  border: 2px solid blue;
  box-sizing: border-box;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const DetailContainer = styled.div`
  margin-top: 20px;
  border: 2px solid red;
  box-sizing: border-box;
  width: 100%;
  height: 600px;
`;

const CloseButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 1px solid lightgray;
  box-sizing: border-box;
  border-radius: 50%;
  color: gray;
`;
const WorkDetailBox = styled.div`
  width: 900px;
  height: 700px;
  padding: 10px;
  border: 3px solid yellow;
  box-sizing: border-box;
  background-color: white;
`;
const WorkDetailContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: lightgray;
  border: 3px solid green;
`;
const Work = styled.button`
  outline: none;
  cursor: pointer;
  margin: 30px 30px;
  /* margin: 0 auto; */
  width: 200px;
  height: 200px;
  /* border: 1px solid black; */
  box-shadow: 1px 1px 10px 1px lightgray;
  border-radius: 10px;
  border-color: transparent;
  background-color: white;
  box-sizing: border-box;
  /* background-color: yellowgreen; */
  margin-bottom: 50px;
  transition: transform 0.5s;
  -webkit-transform: translate3d(0, 0, 0);
  /* -webkit-backface-visibility: hidden; */
  &:hover {
    transform: perspective(600px) rotateY(30deg);
  }
  @media (max-width: 560px) {
    margin: 30px auto;
  }
`;
const WorkBox = styled.div`
  display: flex;
  /* align-items: flex-start; */
  /* justify-content: center; */
  flex-wrap: wrap;
  align-content: flex-start;
  /* border: 2px solid green; */
  box-sizing: border-box;
  margin-bottom: 30px;
  /* width: 100%;
  margin-left: auto;
  margin-right: auto; */
  @media (max-width: 560px) {
    flex-wrap: nowrap;
    flex-direction: column;
    align-content: center;
  }
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
  /* min-height: 1000px; */
  padding: 50px 50px;
  border: 3px solid blue;
  box-sizing: border-box;
  @media (max-width: 764px) {
    padding: 50px 0px;
  }
`;
const PortContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 10px;
  max-width: 1200px;
  /* min-height: 1000px; */
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
