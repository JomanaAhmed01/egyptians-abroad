import React from 'react';
import styled from "styled-components"
import { useHistory } from 'react-router-dom'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
</style>

function ConnectEgyptians() {

  const history = useHistory()

  return (
    <Wrapper>
      <TextWrapper>
        <Header>Better Connect Egyptians Accross The Globe</Header>
        <Text>There are more than <Span>10 million</Span> overseas egyptians living abroad!
          and they are eager to help other egyptians.
          <Span>Connect now</Span>, expand your social and professional network,
          ask anything you want to ask and get answers from egyptians <Span>all over the world</Span>.
        </Text>

        <ButtonWrapper onClick={() => history.push('/SignUpPageCompound')}>
          <Button>Connect Now</Button>
        </ButtonWrapper>

        <AccountWrapper>
          <HaveAccount>Already have account ?</HaveAccount>
          <Login onClick={() => history.push('/LogInPageCompound')}>Login</Login>
        </AccountWrapper>
      </TextWrapper>

      <ImageWrapper>
        <Image src='./img/airplane.svg' />
      </ImageWrapper>
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  width: 100%;
`

export const TextWrapper = styled.div`
  
`

export const Header = styled.p`
  color: #000000;
  font-size: 50px;
  font-weight: bold;
  letter-spacing: -1px;
  width: 600px;

  @media screen and (max-width: 1024px) {
    text-align: center;
    font-size: 32px;
    width: 100%;
  }
`

export const Text = styled.p`
  color: #000000;
  font-size: 20px;
  line-height: 1.45;
  text-align: left;
  width: 570px;

  @media screen and (max-width: 1024px) {
    text-align: center;
    font-size: 18px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
`

export const Span = styled.span`
  font-weight: bold;
`

export const ButtonWrapper = styled.div`
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
  }
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

export const AccountWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 1024px) {
    justify-content: center;
    align-items: center;
  }
`

export const HaveAccount = styled.p`
  color: #000000;
  font-size: 16px;
`

export const Login = styled.p`
  color: #000000;
  font-size: 16px;
  text-decoration: underline;
  cursor: pointer;
`

export const ImageWrapper = styled.div`
  @media screen and (max-width: 1024px) {
    display: none;
  }
`

export const Image = styled.img`
  width: 400px;
  height: 400px;
  opacity: 0.3;
`

export default ConnectEgyptians;