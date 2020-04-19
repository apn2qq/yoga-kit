import React from "react"
import { withKnobs, select } from "@storybook/addon-knobs"

import { Switcher } from "./switcher"

export function Basic() {
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
  title: "Switcher",
  decorators: [withKnobs],
}
