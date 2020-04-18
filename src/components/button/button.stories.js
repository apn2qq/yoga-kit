import React from "react"
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"

import { Button as ButtonComponent } from "components/button"

export function Button() {
  const label = "Size"
  const options = {
    default: null,
    huge: "huge",
  }
  const defaultValue = "default"

  const value = select(label, options, defaultValue)

  return (
    <ButtonComponent onClick={action("clicked")} disabled={boolean("Disabled", false)} size={value}>
      {text("Label", "Push me please")}
    </ButtonComponent>
  )
}

export default {
  title: "Components",
  decorators: [withKnobs],
}
