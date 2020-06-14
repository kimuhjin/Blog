import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Header() {
  return (
    <Fragment>
      <HeaderContainer>
        <Title to="/Home">김어진's Blog</Title>
      </HeaderContainer>
    </Fragment>
  );
}

export default Header;

const Title = styled(Link)`
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: black;
`;

const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
  border-bottom: 1px solid lightgray;
  box-sizing: border-box;
  background-color: white;
`;
