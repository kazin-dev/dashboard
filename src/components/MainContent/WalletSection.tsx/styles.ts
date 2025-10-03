import styled from 'styled-components'
import { colors } from '../../../styles'

export const CardTotal = styled.div`
  max-width: 194px;
  width: 100%;
  height: 96px;
  margin: 0 auto;
  background-color: ${colors.White};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    max-width: 360px;
    margin-top: 20px;
    display: block;
  }
`

export const ContainerTotal = styled.div`
  display: flex;
  width: 100%;
  max-width: 603px;
  margin-top: 36px;

  @media (max-width: 768px) {
    width: 86%;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
`

export const TitleTotal = styled.div`
  line-height: auto;
  color: ${colors.Silver};
  font-size: 12px;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`

export const Value = styled.span`
  font-size: 16px;
  margin: 4px 0;
  display: block;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const CardWallet = styled.div`
  width: 100%;
  max-width: 603px;
  height: auto;
  background-color: ${colors.White};
  margin-top: 12px;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  img {
    @media (max-width: 767px) {
      max-width: 280px;
    }
  }

  /* Estilos para telas entre 768px e 1024px */
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 10px;
    max-width: auto;
  }

  /* Estilos para telas menores que 768px */
  @media (max-width: 767px) {
    padding: 12px;
    max-width: 86%;
    height: auto;
    height: 500px;
  }
`

export const GridWallet = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;

  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #5f1ed9;
    transition: 0.4s;
    border-radius: 25px;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 21px;
    width: 21px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: #ccc;
  }

  input:checked + .slider:before {
    transform: translateX(24px);
  }
`

export const GridHeaderWallet = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  margin-bottom: 10px;
  width: 100%;
  max-width: 1100px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`

export const SpanLine = styled.span`
  width: 1px;
  height: 100%;
  background-color: ${colors.Silver};
  margin: 0 16px;

  @media (max-width: 768px) {
    margin: 0 8px;
  }
`

export const CardInfo = styled.div`
  width: 100%;
  max-width: 300px;
  margin-right: 90px;

  p {
    font-size: 16px;
    line-height: 1.4;
    color: ${colors.Silver};
    margin: 10px 0;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`

export const ButtonClickPassLeft = styled.button`
  height: 32px;
  width: 32px;
  border: 1px solid ${colors.Silver};
  border-radius: 5px;
  background-color: transparent;
  margin-left: 30px;

  @media (max-width: 768px) {
    margin-left: 4px;
  }
`

export const ButtonClickPassRight = styled.button`
  height: 32px;
  width: 32px;
  border: 1px solid ${colors.Silver};
  border-radius: 5px;
  background-color: transparent;
  margin-left: 8px;
`
