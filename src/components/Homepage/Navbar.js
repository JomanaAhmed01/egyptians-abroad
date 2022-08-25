import React from 'react';
import styled from "styled-components"
import { useState } from "react"
import { MenuOutline } from '@styled-icons/evaicons-outline/MenuOutline'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
</style>

function Navbar() {

  const [showMenuSection, setShowMenuSection] = useState(false)
  return (
    <Wrapper>
      {showMenuSection ? (
        <>
          <MenuWrapper>
            <CloseIconWrapper>
              <Close onClick={() => setShowMenuSection(false)} />
            </CloseIconWrapper>

            <MenuItemsWrapper>
              <MenuItem>Network</MenuItem>
              <MenuItem>Ask Questions</MenuItem>
              <MenuItem>Answer Questions</MenuItem>
            </MenuItemsWrapper>

            <MenuButtonWrapper>
              <MenuLoginButton>Login</MenuLoginButton>
              <MenuSignUpButton>Sign Up</MenuSignUpButton>
            </MenuButtonWrapper>
          </MenuWrapper>
        </>
      ) : (
        <>
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

          <Menu onClick={() => setShowMenuSection(true)} />
        </>
      )}
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  background-color: #FFFFFFCC;
  width: 980px;
  height: 70px;
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

//////////////// onClick Menu Section /////////////////

export const MenuWrapper = styled.div`
  background-color: #FFFFFF;
  width: 363px;
  height: 290px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 350px;
  border-radius: 15px;
`

export const MenuItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
`

export const MenuItem = styled.p`
  color: #000000;
  font-weight: bold;
  font-size: 22px;
  cursor: pointer;
  margin-top: -5px;
`

export const MenuButtonWrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
`

export const MenuLoginButton = styled.button`
  background-color: #ECECEC;
  color: #000000;
  width: 142px;
  height: 38px;
  font-size: 16px;
  border: none;
  border-radius: 7px;
  box-shadow: 0px 2px 5px #888888;
  cursor: pointer;
`

export const MenuSignUpButton = styled.button`
  background-color: #1399FF;
  color: #FFFFFF;
  width: 142px;
  height: 38px;
  font-size: 16px;
  border: none;
  border-radius: 7px;
  box-shadow: 0px 2px 5px #888888;
  cursor: pointer;
`

export const CloseIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  padding-top: 20px;
`

export const Close = styled(CloseOutline)`
  width: 40px;
  height: 40px;
`

export default Navbar;