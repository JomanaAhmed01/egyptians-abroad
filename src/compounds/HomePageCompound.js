import React from 'react';
import styled from "styled-components"
import Navbar from '../components/Homepage/Navbar'
import ConnectEgyptians from '../components/Homepage/ConnectEgyptains'
import AskAnything from '../components/Homepage/AskAnything'
import FindPeople from '../components/Homepage/FindPeople'
import ExpandSocial from '../components/Homepage/ExpandSocial'

function HomePageCompound() {
  return (
    <Wrapper>
      <Navbar />
      <ConnectEgyptians />
      <AskAnything />
      <FindPeople />
      <ExpandSocial />
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  
`

export default HomePageCompound;