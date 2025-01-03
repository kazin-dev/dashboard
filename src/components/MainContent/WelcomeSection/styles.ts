import { styled } from 'styled-components'
import { colors } from '../../../styles'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(300px, 1fr)
  ); /* Ajusta o número de colunas e tamanho mínimo dos itens */
  gap: 16px; /* Ajuste o espaçamento entre itens */
  margin-top: 36px;
  align-items: center;

  p {
    color: ${colors.Silver};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Exibe uma coluna em telas menores */
  }
`

export const Button = styled.button`
  padding: 8px 16px; /* Ajuste o padding para telas menores */
  background-color: ${colors.Black};
  color: ${colors.White};
  border: none;
  border-radius: 4px;
  margin-right: 16px;
  font-size: 14px;

  @media (max-width: 768px) {
    margin: 8px 0; /* Ajusta a margem em telas menores */
  }
`

export const Descrition = styled.p`
  /* Sem alterações para responsividade */
`
