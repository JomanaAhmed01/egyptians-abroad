import React from 'react';
import styled from "styled-components"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
</style>

function Buttons() {
  return (
    <Wrapper>
        <ButtonWrapper>
          <SignUpButton>Sign Up</SignUpButton>
          <LoginButton>Login</LoginButton>
        </ButtonWrapper>
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  
`

export const ButtonWrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
`

export const LoginButton = styled.button`
  background-color: #ECECEC;
  color: #000000;
  width: 308px;
  height: 40px;
  font-size: 16px;
  border: none;
  border-radius: 7px;
  box-shadow: 0px 2px 5px #888888;
  cursor: pointer;

  @media screen and (max-width: 490px) {
    width: 90%;
  }
`

export const SignUpButton = styled.button`
  background-color: #1399FF;
  color: #FFFFFF;
  width: 308px;
  height: 40px;
  font-size: 16px;
  border: none;
  border-radius: 7px;
  box-shadow: 0px 2px 5px #888888;
  cursor: pointer;
  margin-bottom: 20px;

  @media screen and (max-width: 490px) {
    width: 90%;
  }
`

export default Buttons;