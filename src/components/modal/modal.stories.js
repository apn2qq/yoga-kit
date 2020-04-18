import React from "react"
import { withKnobs } from "@storybook/addon-knobs"

import { Modal as ModalComponent } from "components/modal"

export function Modal() {
  return (
    <ModalComponent open={true}>
      <h1>Hellow</h1>
    </ModalComponent>
  )
}

export default {
  title: "Components",
  decorators: [withKnobs],
}
