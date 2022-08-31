import React from 'react';
import styled from "styled-components"
import Logo from '../components/SignUpPage/Logo'
import SignUpCard from '../components/SignUpPage/SignUpCard'
import Footer from '../components/Homepage/Footer'

function SignUpPageCompound() {
  return (
    <Wrapper>
      <Logo />
      <SignUpCard />
      <Footer />
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  
`

export default SignUpPageCompound;