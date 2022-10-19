import React, { useState } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link';

const BalanceContainer = styled.div`
  margin-bottom: 5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  color: #f8f8f8;
  background-color: #242424;
  & > div > strong{
    font-size: 1.8rem;
    margin-right: 10%;
  }
  `;

export default function Balance() {
  const[show, setShow] = useState<boolean>(true);
  return (
    <BalanceContainer>
      <div>Saldo</div>
      <div>
        {show? <strong>{ new Intl.NumberFormat('pt-br',{style: 'currency', currency:'BRL'}).format(190000.57)}</strong> : <strong> R$ *******,** </strong>}
        <button onClick={()=> setShow(!show)}>{show ? 'Ocultar' : 'Mostrar'}</button>
      </div>
    </BalanceContainer>
  )
}
