import React, { useState } from "react"
import ReactDOM from "react-dom"

import { Modal } from "components/modal"
import { Button } from "components/button"
import "assets/styles/main.scss"

function App() {
  const [open, setOpen] = useState(false)
  function handleOpenClick() {
    setOpen(true)
  }
  function handleCloseClick(e) {
    setOpen(false)
  }

  return (
    <>
      <button onClick={handleOpenClick}>+</button>
      <p>
        На ближайшую перспективу время стартапов закончилось: инвесторы скорее откажутся от поддержки, если у проектов
        много долгов и они убыточны. Такое мнение высказал главный управляющий директор «Альфа-банка» Владимир
        Верхошинский в интервью «Ведомостям». «То, что случилось с “Рокетбанком”, — это первый звоночек. Подобных
        историй будет происходить больше — и в России, и в мире», — заявил Верхошинский. В марте материнская компания
        финтех-сервиса Qiwi объявила о его закрытии до конца 2020 года. В Qiwi объяснили, что не смогли найти покупателя
        на проект. Топ-менеджер отметил, что подобных историй будет больше — они связаны с демпинговой моделью цифрового
        бизнеса стартапов.
      </p>

      <Modal handleOpenClick={handleOpenClick} handleCloseClick={handleCloseClick} open={open}>
        <button onClick={handleCloseClick}>x</button>
        <p>
          На ближайшую перспективу время стартапов закончилось: инвесторы скорее откажутся от поддержки, если у проектов
          много долгов и они убыточны. Такое мнение высказал главный управляющий директор «Альфа-банка» Владимир
          Верхошинский в интервью «Ведомостям».
        </p>
        <Button size="small">Click me!</Button>
      </Modal>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.getElementById("root")
)
