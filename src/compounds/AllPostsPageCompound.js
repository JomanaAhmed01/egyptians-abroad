import React from 'react';
import styled from "styled-components"
import Navbar from '../components/AllPostsPage/Navbar'
import Header from '../components/AllPostsPage/Header'

function AllPostsPageCompound() {
  return (
    <Wrapper>
      <Navbar />
      <Header />
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  
`

export default AllPostsPageCompound;