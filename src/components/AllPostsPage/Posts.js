import React from 'react';
import styled from "styled-components"
import { posts } from '../../Data/posts';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
</style>

function Posts() {
  return (
    <Wrapper>
      {posts.map((item) =>
      (
        <PostWrapper>
          <ProfileImage src={item.image} />
          <PostTitle>{item.author}</PostTitle>
        </PostWrapper>
      )
      )}
    </Wrapper>
  );
}


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`

export const PostWrapper = styled.div`
  background-color: white;
  border-radius: 18px;
  display: flex;
  padding: 10px 12px 10px 8px;
  width: 460px;
  margin-bottom: 40px;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    width: 90%;
  }
`

export const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  margin-right: 12px;
`

export const PostTitle = styled.p`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 5px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  word-break: break-word;
`

export default Posts;