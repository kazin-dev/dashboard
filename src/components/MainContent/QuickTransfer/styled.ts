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
  gap: 50%;
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
  top: 23.4%;
  transform: translateY(-50%);
  border: none; /* Remove a borda */
  background: transparent; /* Fundo transparente */

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${colors.Silver};

  font-size: 12px; /* Ajusta o tamanho da seta */

  &.left {
    left: 8px; /* Ajusta a posição */
  }

  &.right {
    right: 8px;
  }

  &:hover {
    color: ${colors.Red}; /* Efeito hover opcional */
  }
`

export const BodyCard = styled.div`
  padding: 6px;
`

export const Create = styled.div`
  margin-top: 8px;

  h4 {
    margin-bottom: 8px;
  }

  p {
    font-size: 12px;
    color: ${colors.Silver};
    margin-bottom: 8px;
  }
`

export const CardArea = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 12px 0px;
  border-bottom: 2px solid ${colors.LightGray};

  img {
    height: 20px;
    width: 20px;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: ${colors};
    box-shadow: 0 0 5px ${colors};
  }
`
export const StartArea = styled.div`
  display: flex;
  margin-top: 24px;
  align-items: center;
  padding: 0 0 14px 0px;
  gap: 59%;
`
export const ButtonStarted = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px 12px 8px 16px;
  background-color: ${colors.Black};
  color: ${colors.White};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  img {
    height: 16px;
    width: auto;
    vertical-align: middle;
`
