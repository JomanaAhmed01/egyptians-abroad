import React from 'react';
import styled from "styled-components"
import Logo from '../components/LogInPage/Logo'
import LogInCard from '../components/LogInPage/LogInCard'
import Footer from '../components/Homepage/Footer'

function LogInPageCompound() {
  return (
    <Wrapper>
      <Logo />
      <LogInCard />
      <Footer />
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  
`

export default LogInPageCompound;