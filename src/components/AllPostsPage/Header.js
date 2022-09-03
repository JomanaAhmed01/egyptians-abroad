import React from 'react';
import styled from "styled-components"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
</style>

function Header() {
  return (
    <Wrapper>
      <ProfileImageWrapper>
        <ProfileImage src='./img/avatar.png' />
      </ProfileImageWrapper>

      <TextWrapper>
        <Username>ojy_ahmed01</Username>
        <Bio>`</Bio>
        <AllPostsHeader>All Posts</AllPostsHeader>
      </TextWrapper>
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 3px solid red;

`

export const ProfileImageWrapper = styled.div`
  
`

export const ProfileImage = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
`

export const TextWrapper = styled.div`
  
`

export const Username = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 10px;
  color: rgb(54, 54, 54);
  text-align: center;
`

export const Bio = styled.p`
  font-size: 18px;
  font-weight: 900;
  color: rgb(54, 54, 54);
  text-align: center;
`

export const AllPostsHeader = styled.p`
  font-family: 'Caveat', cursive;
  font-size: 35px;
  font-weight: 700;
  color: rgb(19, 153, 255);
  text-align: center;
`

export default Header;