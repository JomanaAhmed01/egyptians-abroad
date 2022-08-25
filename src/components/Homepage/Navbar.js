import React from 'react';
import styled from "styled-components"
import { MenuOutline } from '@styled-icons/evaicons-outline/MenuOutline'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
</style>

function Navbar() {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo>EgyptainsAbroad</Logo>
      </LogoWrapper>

      <ItemsWrapper>
        <Item>Networking</Item>
        <Item>Ask Questions</Item>
        <Item>Answer Questions</Item>
      </ItemsWrapper>

      <ButtonsWrapper>
        <LogInButton>Login</LogInButton>
        <SignUpButton>Sign Up</SignUpButton>
      </ButtonsWrapper>

      <Menu />
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  background-color: #FFFFFFCC;
  width: 980px;
  height: 70px;
  border: 3px solid red;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (max-width: 1024px) {
    width: 85%;
    justify-content: space-between;
  }
`

export const LogoWrapper = styled.div`
  
`

export const Logo = styled.p`
  color: #1399FF;
  font-family: 'Caveat', cursive;
  font-size: 30px;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    font-size: 25px;
  }
`

export const ItemsWrapper = styled.div`
  width: 473.5px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`

export const Item = styled.p`
  color: #000000;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`

export const ButtonsWrapper = styled.div`
  width: 220px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`

export const LogInButton = styled.button`
  background-color: #ECECEC;
  color: #000000;
  width: 100px;
  height: 38px;
  font-size: 16px;
  border: none;
  border-radius: 7px;
  box-shadow: 0px 2px 5px #888888;
  cursor: pointer;
`

export const SignUpButton = styled.button`
  background-color: #1399FF;
  color: #FFFFFF;
  width: 100px;
  height: 38px;
  font-size: 16px;
  border: none;
  border-radius: 7px;
  box-shadow: 0px 2px 5px #888888;
  cursor: pointer;
`

export const Menu = styled(MenuOutline)`
  display: none;

  @media screen and (max-width: 1024px) {
    display: initial;
    width: 30px;
    height: 30px;
  }
`

export default Navbar;