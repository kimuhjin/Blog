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
          <Menu>
            <FiMenu size={36} />
          </Menu>
        </HeaderBox>
      </HeaderContainer>
    </Fragment>
  );
}

export default Header;
const Menu = styled.div`
  cursor: pointer;
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  height: 100%;
  padding: 0px 20px;
  box-sizing: border-box;
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
  z-index: 9999;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
  border-bottom: 1px solid lightgray;
  box-sizing: border-box;
  background-color: white;
`;
