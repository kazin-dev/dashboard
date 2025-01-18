import { styled } from 'styled-components'
import { colors } from '../../../styles'

const breakpoints = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1280px'
}

export const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 10.8%;
  margin-top: 36px;
  align-items: center;
  flex-wrap: wrap; /* Permite que os itens se ajustem para baixo em telas menores */

  p {
    color: ${colors.Silver};
  }

  @media (min-width: 768px) and (max-width: 1324px) {
    padding: 26px;
    max-width: auto;
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Itens empilhados verticalmente */
    margin-right: 0; /* Remove a margem lateral em telas pequenas */
    margin-top: 10px;
    align-items: flex-start; /* Alinha itens ao início */
    gap: 16px; /* Adiciona espaço entre os itens */
  }
`

export const Button = styled.button`
  padding: 8px 16px;
  background-color: ${colors.Black};
  color: ${colors.White};
  border: none;
  border-radius: 4px;
  margin-right: 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Adiciona transição ao hover */

  &:hover {
    background-color: ${colors.SoftSilver}; /* Cor de fundo no hover */
  }

  @media (max-width: 768px) {
    margin: 8px 0; /* Ajusta a margem para telas menores */
    width: 100%; /* Faz o botão ocupar a largura total */
  }
`

export const Descrition = styled.p`
  font-size: 14px;
  color: ${colors.Silver};
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 12px; /* Diminui o tamanho da fonte em telas menores */
    text-align: justify; /* Ajusta o alinhamento para legibilidade */
  }
`
