import React from "react"
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs"

import { Button } from "src/components/button"

export function Basic() {
  const colorSelector = {
    label: "Size",
    options: {
      Small: "small",
      Big: "big",
    },
    defaultValue: "small",
  }

  return (
    <Button
      size={select(colorSelector.label, colorSelector.options, colorSelector.defaultValue)}
      disabled={boolean("Disabled", false)}
    >
      {text("Label", "Push me please")}
    </Button>
  )
}

export default {
  title: "Button",
  decorators: [withKnobs],
}
