import React from "react"
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs"

import { Button as ButtonComponent } from "src/components/button"

export function Button() {
  const colorSelector = {
    label: "Size",
    options: {
      Small: "small",
      Big: "big",
    },
    defaultValue: "small",
  }

  return (
    <ButtonComponent
      size={select(colorSelector.label, colorSelector.options, colorSelector.defaultValue)}
      disabled={boolean("Disabled", false)}
    >
      {text("Label", "Push me please")}
    </ButtonComponent>
  )
}

export default {
  title: "Components",
  decorators: [withKnobs],
}
