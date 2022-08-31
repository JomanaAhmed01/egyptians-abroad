import React from 'react';
import styled from "styled-components"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
</style>

function Profile() {
  return (
    <Wrapper>

    </Wrapper>
  );
}


export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
`

export const HeaderText = styled.p`
  color: #000000;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`

export const Text = styled.p`
  color: #000000;
  font-size: 14px;
  line-height: 1.43;
  width: 460px;
  text-align: center;

  @media screen and (max-width: 500px) {
    width: 95%;
  }
`

export default Profile;