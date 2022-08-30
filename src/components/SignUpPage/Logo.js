import React from 'react';
import styled from "styled-components"
<style>
    @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
</style>

function Logo() {
    return (
        <Wrapper>
            <Header>EgyptiansAbroad</Header>
        </Wrapper>
    );
}


export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Header = styled.p`
  color: #1399FF;
  font-family: 'Caveat', cursive;
  font-size: 40px;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    font-size: 25px;
  } 
`

export default Logo;