import { styled } from 'styled-components'

export const ChartContainer = styled.div`
  width: 603px;
  height: 341px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 16px;

  @media (max-width: 768px) {
    width: 303px;
    height: 280px;
  }
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
`
