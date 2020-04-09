import React from "react"
import ReactDOM from "react-dom"
import { Button } from "components/button"

import "assets/styles/main.scss"

function App() {
  return <Button>Button</Button>
}

ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.getElementById("root")
)
