import styled from 'styled-components'
import { colors } from '../../../styles'

export const CardTransactions = styled.div`
  width: 100%; /* Faz o card ocupar toda a largura disponível */
  max-width: 610px; /* Limita a largura máxima */
  height: auto; /* Ajusta dinamicamente conforme o conteúdo */
  background-color: ${colors.White};
  margin-top: 36px;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  ul {
    list-style: none;
  }

  /* Estilos para tablets */
  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 610px; /* Ajusta a largura para tablets */
    margin: 0 auto; /* Centraliza o card */
  }

  /* Estilos para telas menores que 768px */
  @media (max-width: 768px) {
    max-width: 360px;
    width: 100%; /* Permite que o card ocupe quase toda a largura */
  }
`

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  p {
    font-size: 12px;
    color: ${colors.Silver};
  }

  a {
    color: ${colors.Silver};
    font-size: 12px;
  }
`

export const TopBarText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
