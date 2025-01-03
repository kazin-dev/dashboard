import styled from 'styled-components'
import { colors } from '../../../styles'

export const CardTransactions = styled.div`
  width: 415px;
  height: 326px;
  background-color: ${colors.White};
  margin-top: 36px;
  list-style: none;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  ul {
    list-style: none;
  }

  @media (max-width: 768px) {
    width: 304px;
    margin-left: 19px;
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
