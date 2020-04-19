import React from "react"
import { withKnobs, text, select } from "@storybook/addon-knobs"

import { Input } from "./input"

export function Default() {
  const skinSelector = {
    label: "Skin",
    options: {
      primary: "primary",
      outline: "outline",
    },
    defaultValue: "primary",
  }

  return (
    <Input
      type="text"
      skin={select(skinSelector.label, skinSelector.options, skinSelector.defaultValue)}
      placeholder={text("Placeholder", "Type your e-mail")}
    ></Input>
  )
}

export default {
  title: "Forms/Input",
  decorators: [withKnobs],
}
