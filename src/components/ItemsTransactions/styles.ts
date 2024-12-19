import styled from 'styled-components'
import { colors } from '../../styles'

export const ModelTransactions = styled.div`
  width: 379px;
  height: 56px;
  border-bottom: 2px solid ${colors.LightGray};
  margin: 12px 0 16px 0px;
  padding-bottom: 10px;
`
export const BodyModelTransactions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px 0 60px;

  div {
    display: flex;
    flex-direction: column;
  }
`
export const Name = styled.p`
  font-size: 14px;
  font-weight: medium;
  line-height: auto;
  margin-top: 8px;
`

export const Date = styled.p`
  font-size: 12px;
  line-height: auto;
  color: ${colors.Silver};
  display: flex;
  align-items: center;
  margin-top: 2px;
`
export const Value = styled.p`
  font-size: 14px;
  line-height: normal;
  color: ${colors.Red};
  margin-left: auto; /* Usa espaço disponível para empurrar o item */
`
