import React from "react"
import {
  withKnobs,
  // text,
  // boolean,
  //  select
} from "@storybook/addon-knobs"
// import { action } from "@storybook/addon-actions"

import { Modal as ModalComponent } from "components/modal"

export function Modal() {
  return (
    <ModalComponent>
      <h1>Inner content</h1>
    </ModalComponent>
  )
}

export default {
  title: "Components",
  decorators: [withKnobs],
}
