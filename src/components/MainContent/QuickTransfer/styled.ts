import styled from 'styled-components'
import { colors } from '../../../styles'

export const Card = styled.div`
  width: 415px;
  height: 401px;
  background-color: ${colors.White};
  margin-top: 14px;
  list-style: none;
  border-radius: 12px;
  position: relative; /* Para posicionar as setas */
  padding: 16px;
`

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin: 0;
  }

  a {
    color: ${colors};
    text-decoration: none;
    font-size: 14px;
  }
`

export const Cards = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  margin: 16px 0;

  &::-webkit-scrollbar {
    display: none; /* Oculta a barra de rolagem */
  }
`

export const CardItem = styled.div`
  flex: 0 0 auto;
  width: 227px;
  height: 72px;
  background-color: ${colors.LightGray};
  border-radius: 8px;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  color: ${colors};
`

export const ArrowButton = styled.button`
  position: absolute;
  top: 22%;
  transform: translateY(-50%);
  border: none; /* Remove a borda */
  background: transparent; /* Fundo transparente */

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${colors.Black}; /* Cor do símbolo */

  font-size: 24px; /* Ajusta o tamanho da seta */

  &.left {
    left: -6px; /* Ajusta a posição */
  }

  &.right {
    right: -6px;
  }

  &:hover {
    color: ${colors.Red}; /* Efeito hover opcional */
  }
`

export const BodyCard = styled.div``

export const Amount = styled.div``

export const Create = styled.div``

export const CardOrPhone = styled.div``
