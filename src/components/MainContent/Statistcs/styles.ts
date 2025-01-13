import { styled } from 'styled-components'
export const ChartContainer = styled.div`
  width: 100%; /* Faz o container ocupar toda a largura disponível */
  max-width: 603px; /* Define uma largura máxima para telas grandes */
  height: auto; /* Ajusta a altura conforme necessário */
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 16px;

  @media (max-width: 768px) {
    max-width: 86%;
    padding: 16px;
  }
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
`
