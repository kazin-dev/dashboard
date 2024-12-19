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
  margin: 4px 0;
  display: block;
`

export const CardWallet = styled.div`
  width: 603px;
  height: 278px;
  background-color: ${colors.White};
  margin-top: 12px;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`
export const GridWallet = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  max-width: 400px;
  width: 100%;
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
  gap: 23%;
  margin-bottom: 10px;
  width: 1100px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export const SpanLine = styled.span`
  width: 0.3px;
  height: 100%;
  background-color: ${colors.Silver};
  margin: 0 26px;
`
export const CardInfo = styled.div`
  width: 300px;

  p {
    font-size: 16px;
    line-height: auto;
    color: ${colors.Silver};
    margin-bottom: 8px;
    margin-top: 10px;
  }
`
