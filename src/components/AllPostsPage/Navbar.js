import React from 'react';
import styled from "styled-components"
<style>
    @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
</style>

function Navbar() {
    return (
        <Wrapper>
            <LogoWrapper>
                <Logo>EgyptainsAbroad</Logo>
            </LogoWrapper>

            <UserWrapper>
                <Username>ojy_ahmed01</Username>
                <ProfileIcon src='./img/avatar.png' />
            </UserWrapper>
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
    width: 95%;
    justify-content: space-between;
  }
`

export const LogoWrapper = styled.div`
  
`

export const Logo = styled.p`
  color: #1399FF;
  font-family: 'Caveat', cursive;
  font-size: 25px;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
`

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Username = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: rgb(54, 54, 54);
  margin-right: 15px;
`

export const ProfileIcon = styled.img`
  width: 42px;
  height: 42px;
  cursor: pointer;
  border-radius: 50%;
`

export default Navbar;