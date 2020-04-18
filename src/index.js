import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "styled-components"

import { theme } from "src/assets/styles/theme"
import { GlobalStyle } from "src/assets/styles/global"

import { Button } from "src/components/button"

function App() {
  return <Button size="big">Testove button</Button>
}

ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
      <GlobalStyle></GlobalStyle>
      <ThemeProvider theme={theme}>
        <App></App>
      </ThemeProvider>
    </React.Fragment>
  </React.StrictMode>,
  document.getElementById("root")
)
