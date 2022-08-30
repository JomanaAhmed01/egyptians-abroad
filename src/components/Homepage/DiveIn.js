import React from 'react';
import styled from "styled-components"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
</style>

function DiveIn() {
  return (
    <Wrapper>
      <TextWrapper>
        <FirstHeader>Ready to Dive In ?</FirstHeader>
        <SecondHeader>Get started now!</SecondHeader>
      </TextWrapper>

      <ButtonWrapper>
        <Button>Get Started</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  
`

export const TextWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FirstHeader = styled.p`
  color: #000000;
  font-size: 50px;
  letter-spacing: -1px;
  width: 100%;
  text-align: center;
`

export const SecondHeader = styled.p`
  color: rgb(20, 155, 255);
  font-size: 50px;
  letter-spacing: -1px;
  width: 100%;
  text-align: center;
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

  @media screen and (max-width: 1024px) {
    text-align: center;
  }
`

export default DiveIn;