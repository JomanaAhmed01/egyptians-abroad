import React from 'react';
import styled from "styled-components"
<style>
    @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
</style>

function Inputs() {
    return (
        <Wrapper>
            <InputAndLabelWrapper>
                <Label>Name</Label>
                <Input type='text' />
            </InputAndLabelWrapper>

            <InputAndLabelWrapper>
                <Label>Bio</Label>
                <TextArea type='text' />
                <MaximumText>0/160</MaximumText>
            </InputAndLabelWrapper>

            <InputAndLabelWrapper>
                <Label>Country</Label>
                <Input type='text' />
            </InputAndLabelWrapper>

            <InputAndLabelWrapper>
                <Label>City</Label>
                <Input type='text' />
            </InputAndLabelWrapper>

            <InputAndLabelWrapper>
                <Label>Phone</Label>
                <Input type='text' />
            </InputAndLabelWrapper>
        </Wrapper>
    );
}


export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
`

export const InputAndLabelWrapper = styled.div`
  
`

export const Label = styled.p`
  color: #000000;
  font-size: 15px;
`

export const Input = styled.input`
  width: 460px;
  height: 40px;
  padding-left: 10px;
  border-radius: 8px;
  font-size: 16px;
  color: rgb(73, 80, 87);
  border: 1px solid #d9d9d9;
  background-color: #FFFFFF;

  :focus {
    border: 1px solid #80b3ff;
    outline: none;
  }

  @media screen and (max-width: 530px) {
    width: 330px;
  }
`

export const TextArea = styled.textarea`
  width: 460px;
  height: 125px;
  resize: none;
  padding-left: 10px;
  padding-top: 10px;
  border-radius: 8px;
  font-size: 16px;
  color: rgb(73, 80, 87);
  border: 1px solid #d9d9d9;
  background-color: #FFFFFF;

  :focus {
    border: 1px solid #80b3ff;
    outline: none;
  }

  @media screen and (max-width: 530px) {
    width: 330px;
  }
`

export const MaximumText = styled.p`
  color: #000000;
  font-size: 15px;
`

export default Inputs;