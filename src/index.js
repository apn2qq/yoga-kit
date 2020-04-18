import React from "react"
import ReactDOM from "react-dom"
import { Button } from "components/button"
import { Grid } from "components/grid"
import { Col } from "components/grid"

import "assets/styles/main.scss"

function App() {
  return (
    <>
      <Button>Я обычная кнопка</Button>
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
    <App></App>
  </React.StrictMode>,
  document.getElementById("root")
)
