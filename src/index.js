import React from "react"
import ReactDOM from "react-dom"
import { Button } from "components/button"

import "assets/styles/main.scss"

function App() {
  return <Button>Я обычная кнопка</Button>
}

ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.getElementById("root")
)
