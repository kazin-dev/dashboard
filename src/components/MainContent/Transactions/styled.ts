import styled from 'styled-components'
import { colors } from '../../../styles'

export const CardTransactions = styled.div`
  width: 415px;
  height: 326px;
  background-color: ${colors.White};
  margin-top: 36px;
  list-style: none;

  ul {
    list-style: none;
  }
`
export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  padding: 8px;

  p {
    font-size: 12px;
    color: ${colors.Silver};
  }

  a {
    color: ${colors.Silver};
    margin-right: 40px;
    font-size: 12px;
  }
`

export const TopBarText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
