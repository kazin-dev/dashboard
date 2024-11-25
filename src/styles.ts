import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  Silver: '#bfbfbf'
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
  max-width: 1160px;
  width: 100%;
  margin: 20px auto;
`
