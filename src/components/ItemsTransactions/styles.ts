import styled from 'styled-components'
import { colors } from '../../styles'

export const ModelTransactions = styled.div`
  width: 379px;
  height: 56px;
  display: flex;
  border-bottom: 2px solid ${colors.LightGray};
  margin: 12px 0 16px 12px;
  padding-bottom: 10px;
`
export const BodyModelTransactions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 33px;
  display: flex;
  align-items: center;
  padding: 20px;
`
export const Name = styled.p`
  font-size: 14px;
  font-weight: medium;
  line-height: auto;
`

export const Date = styled.p`
  font-size: 12px;
  line-height: auto;
  color: ${colors.Silver};
  display: inline;
`
export const Value = styled.p`
  font-size: 14px;
  line-height: auto;
  color: ${colors.Red};
  margin-left: 80px;
`
