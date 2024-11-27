import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  Silver: '#bfbfbf',
  Black: '#000'
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
  height: 100vh; /* Garante que a altura seja igual à da tela inteira */
  width: 100vw;
  overflow: hidden; /* Evita que elementos escapem */
`

export const MainContent = styled.main`
  flex: 1; /* Ocupa todo o espaço restante ao lado da Sidebar */
  display: flex;
  flex-direction: column;
`
