import styled from 'styled-components'
import { colors } from '../../styles'

export const ModelTransactions = styled.div`
  width: 379px;
  height: 56px;
  display: flex;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`
export const BodyModelTransactions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  display: flex;
  align-items: center;
  padding-bottom: 10px;
`
export const Name = styled.p`
  font-size: 14px;
  font-weight: medium;
  line-height: auto;
`

export const Date = styled.p`
  font-size: 14px;
  line-height: auto;
  color: ${colors.Silver};
`
export const Value = styled.p`
  font-size: 14px;
  line-height: auto;
  color: ${colors.Red};
`
