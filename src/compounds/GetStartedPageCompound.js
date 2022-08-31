import React from 'react';
import styled from "styled-components"
import Header from '../components/GetStarted/Header'
import Profile from '../components/GetStarted/Profile'

function GetStartedPageCompound() {
  return (
    <Wrapper>
      <Header />
      <Profile />
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  
`

export default GetStartedPageCompound;