// styles.ts
import { styled } from 'styled-components'

export const ChartContainer = styled.div`
  width: 100%;
  max-width: 603px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 16px;
  height: 378px;

  @media (max-width: 768px) {
    width: 86%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

// 🔽 wrapper só para a área do gráfico
export const ChartBox = styled.div`
  width: 100%;
  height: 300px; /* desktop */
  @media (max-width: 768px) {
    height: 200px; /* mobile: +alto para não “amassar” */
  }
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
`
