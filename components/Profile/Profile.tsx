import React from 'react'
import styled from '@emotion/styled';
import { Avatar } from '@mui/material';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f8f8f8;
  font-family: sans-serif;
  background-color: #242424;
  width: 100%;
  height: 320px;
  `;
const AvatarCointainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  h2,h3{
    margin: 0;
    font-weight: 500;
  }
  h2{
    margin-top: 10%;
  }
  `;

export default function Profile() {
  return (
    <ProfileContainer>
      <AvatarCointainer>
        <Avatar alt="Thi L Luiz" src="https://avatars.githubusercontent.com/u/86064868?v=4" sx={{width: 200, height: 200}} />
        <h2>Thi L Luiz</h2>
        <h3>Software Student</h3>
      </AvatarCointainer>
    </ProfileContainer>
  )
}
