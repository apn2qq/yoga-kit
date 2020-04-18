import React from "react"
import ReactDOM from "react-dom"

import { Grid } from "components/grid"
import { Col } from "components/grid"
import { ThemeProvider } from "styled-components"
import { theme } from "assets/styles/theme"

import { GlobalStyle } from "assets/styles/global"
import { Button } from "components/button"

function App() {
  return (
    <>
      <Button size={"small"}>Я обычная кнопка</Button>
      <Grid>
        <Col col={8} lg={12}>
          Первая карточка
        </Col>
        <Col col={8} lg={12}>
          Вторая карточка
        </Col>
        <Col col={8} lg={12}>
          Третья карточка
        </Col>
      </Grid>
    </>
  )
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
