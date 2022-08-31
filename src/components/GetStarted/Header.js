import React from 'react';
import styled from "styled-components"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
</style>

function Header() {
  return (
    <Wrapper>
      <HeaderText>Let’s Get Started</HeaderText>
      <Text>Upload a photo to display on your profile and add some basic information to introduce yourself.</Text>
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

export const HeaderText = styled.p`
  color: #000000;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`

export const Text = styled.p`
  color: #000000;
  font-size: 14px;
  line-height: 1.43;
  width: 460px;
  text-align: center;
`

export default Header;