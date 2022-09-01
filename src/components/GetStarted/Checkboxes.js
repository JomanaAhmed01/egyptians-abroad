import React from 'react';
import styled from "styled-components"
<style>
    @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
</style>

function Checkboxes() {
    return (
        <Wrapper>
            <CheckboxesWrapper>
                <Header>Interested In</Header>

                <CheckboxWrapper>
                    <Checkbox type='checkbox' />
                    <Text>Social Networking</Text>
                </CheckboxWrapper>

                <CheckboxWrapper>
                    <Checkbox type='checkbox' />
                    <Text>Professional Networking</Text>
                </CheckboxWrapper>

                <CheckboxWrapper>
                    <Checkbox type='checkbox' />
                    <Text>Business Partnership</Text>
                </CheckboxWrapper>

                <CheckboxWrapper>
                    <Checkbox type='checkbox' />
                    <Text>Looking Around</Text>
                </CheckboxWrapper>

                <Header>Topics of Interest</Header>

                <CheckboxWrapper>
                    <Checkbox type='checkbox' />
                    <Text>Business and Entrepreneurship</Text>
                </CheckboxWrapper>

                <CheckboxWrapper>
                    <Checkbox type='checkbox' />
                    <Text>Visas and Immigration</Text>
                </CheckboxWrapper>

                <CheckboxWrapper>
                    <Checkbox type='checkbox' />
                    <Text>Business partnership</Text>
                </CheckboxWrapper>

                <CheckboxWrapper>
                    <Checkbox type='checkbox' />
                    <Text>Looking Around</Text>
                </CheckboxWrapper>

                <CheckboxWrapper>
                    <Checkbox type='checkbox' />
                    <Text>Other</Text>
                </CheckboxWrapper>
            </CheckboxesWrapper>
        </Wrapper>
    );
}


export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: -220px;
  margin-top: 50px;

  @media screen and (max-width: 530px) {
    margin-left: -100px;
  }
`

export const CheckboxesWrapper = styled.div`
  
`

export const Header = styled.p`
  color: #000000;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.25px;
`

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Checkbox = styled.input`
  margin-right: 10px;
`

export const Text = styled.p`
  font-size: 1rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.00938em;
`

export default Checkboxes;