import React from 'react';
import styled from "styled-components"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
</style>

function Profile() {
  return (
    <Wrapper>
      <ImagesWrapper>
        <Image src='./img/avatar.png' />
      </ImagesWrapper>
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
`

export const ImagesWrapper = styled.div`
  
`

export const Image = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
`

export default Profile;