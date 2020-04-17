import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "styled-components"
import { theme } from "assets/styles/theme"

import { GlobalStyle } from "assets/styles/global"
import { Button } from "components/button"

function App() {
  return <Button size="small">Testove button</Button>
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle>
      <App></App>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
