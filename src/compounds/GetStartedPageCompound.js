import React from 'react';
import styled from "styled-components"
import Header from '../components/GetStarted/Header'
import Profile from '../components/GetStarted/Profile'
import Inputs from '../components/GetStarted/Inputs'
import Checkboxes from '../components/GetStarted/Checkboxes'

function GetStartedPageCompound() {
  return (
    <Wrapper>
      <Header />
      <Profile />
      <Inputs />
      <Checkboxes />
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  
`

export default GetStartedPageCompound;