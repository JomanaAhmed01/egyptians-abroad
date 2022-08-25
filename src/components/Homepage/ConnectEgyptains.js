import React from 'react';
import styled from "styled-components"
<style>
    @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
</style>

function ConnectEgyptians() {
    return (
        <Wrapper>
            <TextWrapper>
                <Header>Better Connect Egyptians Accross The Globe</Header>
                <Text>There are more than <Span>10 million</Span> overseas egyptians living abroad!
                    and they are eager to help other egyptians.
                    <Span>Connect now</Span>, expand your social and professional network,
                    ask anything you want to ask and get answers from egyptians <Span>all over the world</Span>.
                </Text>

                <Button>Connect Now</Button>

                <AccountWrapper>
                    <HaveAccount>Already have account ?</HaveAccount>
                    <Login>Login</Login>
                </AccountWrapper>
            </TextWrapper>
        </Wrapper>
    );
}


export const Wrapper = styled.div`
  
`

export const TextWrapper = styled.div`
  
`

export const Header = styled.p`
  
`

export const Text = styled.p`
  
`

export const Button = styled.button`
  
`

export const AccountWrapper = styled.div`
  
`

export const HaveAccount = styled.p`
  
`

export const Login = styled.p`
  
`

export default ConnectEgyptians;