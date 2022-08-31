import React from 'react';
import styled from "styled-components"
import Logo from '../components/LogInPage/Logo'
import LogInCard from '../components/LogInPage/LogInCard'

function LogInPageCompound() {
  return (
    <Wrapper>
      <Logo />
      <LogInCard />
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  
`

export default LogInPageCompound;