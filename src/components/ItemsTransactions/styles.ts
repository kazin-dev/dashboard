import styled from 'styled-components'
import { colors } from '../../styles'

interface ValueProps {
  isPositive: boolean
}

export const ModelTransactions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px; /* Adiciona espaço entre imagem e conteúdo */
  width: 100%; /* Para ocupar o espaço disponível */
  border-bottom: 2px solid ${colors.LightGray};
  margin: 12px 0;
  padding-bottom: 10px;

  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 610px; /* Ajusta a largura para tablets */
    margin: 0 auto; /* Centraliza o card */
  }

  /* Estilos para telas menores que 768px */
  @media (max-width: 767px) {
    max-width: 310px;
    width: 100%; /* Permite que o card ocupe quase toda a largura */
  }
`

export const BodyModelTransactions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* Garante que o conteúdo interno ocupa o espaço disponível */

  div {
    display: flex;
    flex-direction: column;
    gap: 4px; /* Espaçamento vertical */
  }
`

export const Name = styled.p`
  font-size: 14px;
  font-weight: 500; /* Medium */
  line-height: 1.2; /* Melhor controle de altura das linhas */
  margin: 0;
`

export const Date = styled.p`
  font-size: 12px;
  line-height: 1.2;
  color: ${colors.Silver};
  margin: 0;
`

export const Value = styled.p<ValueProps>`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  color: ${({ isPositive }) => (isPositive ? colors.Green : colors.Red)};
  margin-left: auto;
`

export const TransactionImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  object-fit: cover;
`
