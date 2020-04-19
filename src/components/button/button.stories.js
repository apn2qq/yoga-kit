import React from "react"
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs"

import { Button } from "./button"

export function Basic() {
  const sizeSelector = {
    label: "Size",
    options: {
      small: "small",
      big: "big",
    },
    defaultValue: "small",
  }

  const skinSelector = {
    label: "Skin",
    options: {
      primary: "primary",
      outline: "outline",
    },
    defaultValue: "primary",
  }

  return (
    <Button
      size={select(sizeSelector.label, sizeSelector.options, sizeSelector.defaultValue)}
      skin={select(skinSelector.label, skinSelector.options, skinSelector.defaultValue)}
      disabled={boolean("Disabled", false)}
      label={text("Label", "Push me please")}
    ></Button>
  )
}

export default {
  title: "Button",
  decorators: [withKnobs],
}
