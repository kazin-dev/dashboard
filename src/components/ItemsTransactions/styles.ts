import styled from 'styled-components'
import { colors } from '../../styles'

export const ModelTransactions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  border-bottom: 2px solid ${colors.LightGray};
  margin: 12px 0;
  padding-bottom: 10px;

  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 610px;
    margin: 0 auto;
  }

  @media (max-width: 767px) {
    max-width: 310px;
    width: 100%;
  }
`

export const BodyModelTransactions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`

export const Name = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
`

export const Date = styled.p`
  font-size: 12px;
  line-height: 1.2;
  color: ${colors.Silver};
  margin: 0;
`

type ValueProps = { $isPositive: boolean }

export const Value = styled.p<ValueProps>`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  margin-left: auto;
  color: ${({ $isPositive }) => ($isPositive ? '#16a34a' : '#dc2626')};
`

export const TransactionImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  object-fit: cover;
`
