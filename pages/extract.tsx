import styled from '@emotion/styled'
import React from 'react'
import ExtractContent from '../components/ExtractContent'
import SideBar from '../components/SideBar'

const ExtractContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
` 

export default function ExtractPage() {
  return (
    <ExtractContainer>
      <SideBar/>
        <ExtractContent/>
    </ExtractContainer>
  )
}

