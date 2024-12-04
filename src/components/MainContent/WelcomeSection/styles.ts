import { styled } from 'styled-components'
import { colors } from '../../../styles'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50%;
  margin-top: 36px;
  display: flex;
  align-items: center;

  p {
    color: ${colors.Silver};
  }
`
export const Button = styled.button`
  padding: 8px;
  background-color: ${colors.Black};
  color: ${colors.White};
  border: none;
  border-radius: 4px;
  margin-right: 16px;
`
export const Descrition = styled.p``
