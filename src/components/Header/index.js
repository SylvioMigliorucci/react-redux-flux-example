import React from 'react';

import { Container } from './styles';
import logo from '../../assets/img/logo2.png'

export default function Header() {
  return (
      <Container>
          <img src={logo} width='150px' height='150'  alt="Sylvio logo"/>
      </Container>
  );
}
