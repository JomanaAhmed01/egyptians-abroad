import React from 'react';
import styled from "styled-components"
import Navbar from '../components/MyProfilePage/Navbar'
import Header from '../components/MyProfilePage/Header'
import HeaderAndButton from '../components/MyProfilePage/HeaderAndButton'

function MyProfilePageCompound() {
  return (
    <Wrapper>
      <Navbar />
      <Header />
      <HeaderAndButton />
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  
`

export default MyProfilePageCompound;