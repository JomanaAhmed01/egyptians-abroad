import React from 'react';
import styled from "styled-components"
import { PersonCircle } from '@styled-icons/bootstrap/PersonCircle'
import { Edit } from '@styled-icons/boxicons-solid/Edit'
import { LogOut } from '@styled-icons/entypo/LogOut'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
</style>

function Navbar() {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo>EgyptainsAbroad</Logo>
      </LogoWrapper>

      <UserAndMenuWrapper>
        <UserWrapper>
          <Username>ojy_ahmed01</Username>
          <ProfileIcon src='./img/avatar.png' />
        </UserWrapper>

        <MenuWrapper>
          <ItemWrapper>
            <Profile />
            <Item>My Profile</Item>
          </ItemWrapper>

          <ItemWrapper>
            <Change />
            <Item>Edit Profile</Item>
          </ItemWrapper>

          <ItemWrapper>
            <Logout />
            <Item>Logout</Item>
          </ItemWrapper>
        </MenuWrapper>
      </UserAndMenuWrapper>
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  background-color: #FFFFFFCC;
  width: 800px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 50px;
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (max-width: 1024px) {
    width: 90%;
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

export const UserAndMenuWrapper = styled.div`
  margin-bottom: -170px;
`

export const MenuWrapper = styled.div`
  background: #FFFFFF;
  border-radius: 22.5px;
  box-shadow: rgb(0 0 0 / 5%) 0px 13px 20px 0px;
  width: 175px;
  height: 150px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const Profile = styled(PersonCircle)`
  width: 15px;
  height: 15px;
`

export const Change = styled(Edit)`
  width: 15px;
  height: 15px;
`

export const Logout = styled(LogOut)`
  width: 15px;
  height: 15px;
  margin-left: -20px;
`

export const Item = styled.p`
  color: #000000;
  font-size: 16px;
  font-weight: 600;
  margin-left: 15px;
`

export default Navbar;