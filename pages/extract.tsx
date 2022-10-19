import styled from '@emotion/styled'
import React from 'react'
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
      <section>
        <h1>Extrato</h1>
        Aqui vira a lista de extrato
      </section>
    </ExtractContainer>
  )
}

