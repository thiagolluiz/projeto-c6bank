import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  ul{
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    height: 350px;
    overflow-y: auto;
    &::-webkit-scrollbar-thumb{
      border-radius: 5px;
      background-color: #242424;
      outline: 1px solid #777777;
    }
    &::-webkit-scrollbar{
      width: 6px;
    }
    li{
      list-style: none;
      display: flex;
      line-height: 60px;
      border-left: 40px solid transparent;
      padding-left: 5%;
      &:hover{
        border-top-right-radius: 10px;
        border-bottom-left-radius: 10px;
        background-color: #616161;
        border-left: 4px solid #ffef0d; 
      }
    }
  }
  `;

export default function Menu() {
  return (
    <MenuContainer>
      <ul>
        <li><Link href=" " > Inicio</Link></li>
        <li><Link href=" " > Extrato</Link></li>
        <li><Link href=" " > Transferencia</Link></li>
        <li><Link href=" " > Pagamento</Link></li>
        <li><Link href=" " > Cartoes</Link></li>
        <li><Link href=" " > Credito</Link></li>
        <footer>
        <button>Sair da conta</button>
        </footer>
      </ul>
    </MenuContainer>
  )
}

