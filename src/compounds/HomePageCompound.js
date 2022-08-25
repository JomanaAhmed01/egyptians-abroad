import React from 'react';
import styled from "styled-components"
import Navbar from '../components/Homepage/Navbar'
import ConnectEgyptians from '../components/Homepage/ConnectEgyptains'
import AskAnything from '../components/Homepage/AskAnything'

function HomePageCompound() {
  return (
    <Wrapper>
      <Navbar />
      <ConnectEgyptians />
      <AskAnything />
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  
`

export default HomePageCompound;