import React from 'react';
import styled from "styled-components"
import Navbar from '../components/Homepage/Navbar'
import ConnectEgyptians from '../components/Homepage/ConnectEgyptains'

function HomePageCompound() {
  return (
    <Wrapper>
      <Navbar />
      <ConnectEgyptians />
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  
`

export default HomePageCompound;