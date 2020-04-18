import React from "react"
import { withKnobs } from "@storybook/addon-knobs"

import { Modal } from "src/components/modal"

export function Basic() {
  return (
    <Modal open={true}>
      <h1>Hellow</h1>
    </Modal>
  )
}

export default {
  title: "Modal",
  decorators: [withKnobs],
}
