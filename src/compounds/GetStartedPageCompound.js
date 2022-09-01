import React from 'react';
import styled from "styled-components"
import Header from '../components/GetStarted/Header'
import Profile from '../components/GetStarted/Profile'
import Inputs from '../components/GetStarted/Inputs'

function GetStartedPageCompound() {
  return (
    <Wrapper>
      <Header />
      <Profile />
      <Inputs />
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  
`

export default GetStartedPageCompound;