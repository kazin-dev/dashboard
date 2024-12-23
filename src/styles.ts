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
  height: 102vh; /* Garante que a altura seja igual à da tela inteira */
  width: 100%;
  overflow: hidden; /* Evita que elementos escapem */
  overflow-y: hidden;
`

export const MainContent = styled.main`
  flex: 1; /* Ocupa todo o espaço restante ao lado da Sidebar */
  display: flex;
  flex-direction: column;
  background-color: ${colors.LightGray};
  max-width: 1800px;
  width: 100%;
`
export const GridPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
`
