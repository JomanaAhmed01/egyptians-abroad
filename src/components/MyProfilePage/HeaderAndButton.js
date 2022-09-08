import React from 'react';
import styled from "styled-components"
<style>
    @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
</style>

function HeaderAndButton() {
    return (
        <Wrapper>
            <Header>You do not have any posts yet!</Header>
            <Button>Back to home</Button>
        </Wrapper>
    );
}


export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Header = styled.p`
  font-size: 18px;
  margin-top: 20px;
`

export const Button = styled.button`
  background-color: #ECECEC;
  color: #5A5A5A;
  width: 460px;
  height: 40px;
  font-size: 16px;
  border: none;
  border-radius: 7px;
  box-shadow: 0px 2px 5px #888888;
  cursor: pointer;
`

export default HeaderAndButton;