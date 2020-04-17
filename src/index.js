import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "styled-components"
import { theme } from "assets/styles/theme"

import { Button } from "components/button"

function App() {
  return <Button>++</Button>
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App></App>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
