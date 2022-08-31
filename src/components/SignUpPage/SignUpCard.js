import React from 'react';
import styled from "styled-components"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
</style>

function SignUpCard() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header>Sign up</Header>
      </HeaderWrapper>

      <FieldsWrapper>
        <FieldAndLabelWrapper>
          <Label>Name</Label>
          <Field type='text' />
        </FieldAndLabelWrapper>

        <FieldAndLabelWrapper>
          <Label>Email</Label>
          <Field type='email' />
        </FieldAndLabelWrapper>

        <FieldAndLabelWrapper>
          <Label>Password</Label>
          <Field type='password' />
        </FieldAndLabelWrapper>

        <ButtonWrapper>
          <SignUpButton>Sign Up</SignUpButton>
          <LoginButton>Login</LoginButton>
        </ButtonWrapper>
      </FieldsWrapper>
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 350px;
  height: 473px;
  border: 1px solid rgb(19, 153, 255);
  border-radius: 10px;
  padding-left: 30px;

  @media screen and (max-width: 490px) {
    width: 90%;
  }
`

export const HeaderWrapper = styled.div`
  
`

export const Header = styled.p`
  color: #000000;
  font-size: 30px;
  letter-spacing: -0.5px;
  margin-bottom: 28px;
`

export const FieldsWrapper = styled.div`
  
`

export const FieldAndLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  color: #000000;
  font-size: 15px;
  letter-spacing: -0.25px;
  margin-bottom: 7px;
`

export const Field = styled.input`
  width: 306px;
  height: 40px;
  color: #000000;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #CCCCCC;
  background-color: #FFFFFF;
  margin-bottom: 10px;
  
  @media screen and (max-width: 490px) {
    width: 90%;
  }
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

export default SignUpCard;