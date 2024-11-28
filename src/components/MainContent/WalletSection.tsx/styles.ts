import styled from 'styled-components'
import { colors } from '../../../styles'

export const CardTotal = styled.div`
  max-width: 194px;
  width: 100%;
  height: 96px;
  margin: 0 auto;
  background-color: ${colors.White};
  padding: 16px;
  border-radius: 8px;
`
export const ContainerTotal = styled.div`
  display: flex;
  width: 603px;
  margin-top: 36px;
`
export const TitleTotal = styled.div`
  line-height: auto;
  color: ${colors.Silver};
  font-size: 12px;
`
export const Value = styled.span`
  font-size: 16px;
`
export const CardWallet = styled.div`
  width: 603px;
  height: 278px;
  background-color: ${colors.White};
  margin-top: 12px;
  border-radius: 12px;
`
export const GridWallet = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
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
