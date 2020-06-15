import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

function Header() {
  return (
    <Fragment>
      <HeaderContainer>
        <HeaderBox>
          <Title to="/">Blog</Title>
          <FiMenu size={36} />
        </HeaderBox>
      </HeaderContainer>
    </Fragment>
  );
}

export default Header;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  height: 100%;
`;
const Title = styled(Link)`
  font-size: 24px;
  /* font-weight: bold; */
  text-decoration: none;
  color: black;
`;

const HeaderContainer = styled.div`
  font-family: "Orbitron", sans-serif;
  position: fixed;
  display: flex;
  top: 0;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
  border-bottom: 1px solid lightgray;
  box-sizing: border-box;
  background-color: white;
`;
