import React from 'react';
import styled from "styled-components"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
</style>

function Buttons() {
  return (
    <Wrapper>
        <ButtonWrapper>
          <CreateProfileButton>Create Profile</CreateProfileButton>
          <CancelButton>Cancel</CancelButton>
        </ButtonWrapper>
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CancelButton = styled.button`
  background-color: #ECECEC;
  color: #000000;
  width: 460px;
  height: 40px;
  font-size: 16px;
  border: none;
  border-radius: 7px;
  box-shadow: 0px 2px 5px #888888;
  cursor: pointer;

  @media screen and (max-width: 530px) {
    width: 75%;
  }
`

export const CreateProfileButton = styled.button`
  background-color: #1399FF;
  color: #FFFFFF;
  width: 460px;
  height: 40px;
  font-size: 16px;
  border: none;
  border-radius: 7px;
  box-shadow: 0px 2px 5px #888888;
  cursor: pointer;
  margin-bottom: 20px;

  @media screen and (max-width: 530px) {
    width: 75%;
  }
`

export default Buttons;