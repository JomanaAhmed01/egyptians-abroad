import React from 'react';
import styled from "styled-components"
import { useHistory } from 'react-router-dom'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
</style>

function AskAnything() {

  const history = useHistory()

  return (
    <Wrapper>
      <TextWrapper>
        <Header>Ask About Anything <Span><Image src='./img/chatting.svg' /></Span> in Your City or Other Citites</Header>
        <Text>Are you moving to a new city ?</Text>
        <Text> Do you want to know where is Halal-Food shops ?</Text>
        <Text>Ask real people from the city that you move to , you will get answers you will never find in Google!</Text>
      </TextWrapper>

      <ButtonWrapper onClick={() => history.push('/SignUpPageCompound')}>
        <Button>Ask Now</Button>
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

export const Header = styled.p`
  color: #000000;
  font-size: 50px;
  font-weight: bold;
  letter-spacing: -1px;
  width: 800px;
  text-align: center;

  @media screen and (max-width: 1024px) {
    font-size: 32px;
    width: 100%;
  }
`

export const Span = styled.span`
  
`

export const Image = styled.img`
  width: 70px;
  height: 70px;

  @media screen and (max-width: 1024px) {
    width: 60px;
    height: 60px;
  }
`

export const Text = styled.p`
  color: #000000;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 1.45;
  width: 550px;
  text-align: center;
  margin-top: -0.5px;

  @media screen and (max-width: 1024px) {
    font-size: 18px;
    width: 70%;
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

export default AskAnything;