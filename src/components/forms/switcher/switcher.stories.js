import React from "react"
import { withKnobs, select } from "@storybook/addon-knobs"

import { Switcher } from "./switcher"

export function Default() {
  const sizeSelector = {
    label: "Size",
    options: {
      small: "small",
      big: "big",
    },
    defaultValue: "small",
  }

  return (
    <Switcher
      size={select(sizeSelector.label, sizeSelector.options, sizeSelector.defaultValue)}
    ></Switcher>
  )
}

export default {
  title: "Forms/Switcher",
  decorators: [withKnobs],
}
