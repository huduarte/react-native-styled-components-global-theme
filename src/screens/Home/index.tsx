import React from 'react';

import {useTheme} from 'styled-components';

import {
  Container,
  Title,
} from './styles';

export function Home(){
  const theme = useTheme();

  return (
    <Container color={theme.colors.background} >
      <Title>Fontes e Cores Globais</Title>
    </Container>
  );
}