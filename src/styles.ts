import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  White: '#fff',
  Silver: '#848484',
  SoftSilver: '#747475',
  Black: '#000',
  LightGray: '#F5F5F5',
  Red: '#D70000',
  Green: '#28a745'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%; /* Garante que a altura seja 100% da viewport */
  width: 100%;
  overflow: hidden;

  @media (min-width: 768px) {
    flex-direction: row; /* Sidebar ao lado para telas maiores */
  }
`

export const SidebarWrapper = styled.div`
  width: 100%;
  height: 100%; /* Preenche a altura total da tela */
  @media (min-width: 768px) {
    width: 25%;
  }
`

export const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${colors.LightGray};
  max-width: 100%;
  width: 100%;
  height: 100%; /* Ajusta a altura dinamicamente */
  padding: 16px;

  @media (min-width: 1024px) {
    max-width: 1800px;
    height: 100%; /* Garante que preencha toda a altura em telas grandes */
    padding: 32px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 16px;
    max-width: 100%;
  }
`

export const GridPage = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  height: auto; /* Ajusta a altura do grid conforme necessário */

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 28px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(
      3,
      1fr
    ); /* Adiciona mais colunas em telas maiores */
  }
`

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%; /* Preenche a altura total do MainContent */
  @media (min-width: 768px) {
    flex-direction: row;
  }
`
