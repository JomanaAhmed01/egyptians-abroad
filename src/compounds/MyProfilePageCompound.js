import React from 'react';
import styled from "styled-components"
import Navbar from '../components/MyProfilePage/Navbar'
import Header from '../components/MyProfilePage/Header'

function MyProfilePageCompound() {
  return (
    <Wrapper>
      <Navbar />
      <Header />
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  
`

export default MyProfilePageCompound;