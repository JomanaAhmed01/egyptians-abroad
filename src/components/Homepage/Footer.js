import React from 'react';
import styled from "styled-components"
import { useHistory } from 'react-router-dom'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
</style>

function Footer() {

  const history = useHistory()

  return (
    <Wrapper>
      <LogoWrapper>
        <Logo>EgyptainsAbroad</Logo>
      </LogoWrapper>

      <ItemsWrapper>
        <Item onClick={() => history.push('/test')}>About</Item>
        <Item onClick={() => history.push('/test')}>Terms</Item>
        <Item onClick={() => history.push('/test')}>Privacy</Item>
        <Item onClick={() => history.push('/test')}>Contact</Item>
      </ItemsWrapper>
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  background-color: #FFFFFFCC;
  width: 980px;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 120px;
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (max-width: 1024px) {
    width: 85%;
    justify-content: space-between;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`

export const LogoWrapper = styled.div`
  
`

export const Logo = styled.p`
  color: #9B9B9B;
  font-family: 'Caveat', cursive;
  font-size: 25px;
  cursor: default;
`

export const ItemsWrapper = styled.div`
  width: 225px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Item = styled.p`
  color: #9B9B9B;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
`

export default Footer;