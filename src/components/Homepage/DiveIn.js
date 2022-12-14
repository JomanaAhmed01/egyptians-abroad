import React from 'react';
import styled from "styled-components"
import { useHistory } from 'react-router-dom'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
</style>

function DiveIn() {

  const history = useHistory()

  return (
    <Wrapper>
      <TextWrapper>
        <FirstHeader>Ready to Dive In ?</FirstHeader>
        <SecondHeader>Get started now!</SecondHeader>
      </TextWrapper>

      <ButtonWrapper onClick={() => history.push('/SignUpPageCompound')}>
        <Button>Get Started</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  margin-top: 200px;
`

export const TextWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`

export const FirstHeader = styled.p`
  color: #000000;
  font-size: 50px;
  letter-spacing: -1px;
  width: 100%;
  text-align: center;
  font-weight: bold;
  margin-bottom: -30px;

  @media screen and (max-width: 1024px) {
    font-size: 32px;
    margin-bottom: -20px;
  }
`

export const SecondHeader = styled.p`
  color: rgb(20, 155, 255);
  font-size: 50px;
  letter-spacing: -1px;
  width: 100%;
  text-align: center;
  font-weight: bold;

  @media screen and (max-width: 1024px) {
    font-size: 32px;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`

export const Button = styled.button`
  width: 295px;
  height: 46px;
  background-color: #1399FF;
  color: #FFFFFF;
  border: 1px solid transparent;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    text-align: center;
  }
`

export default DiveIn;