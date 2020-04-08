import React from "react"
import { action } from "@storybook/addon-actions"
import { Button } from "components/button"

export default {
  title: "Button",
  component: Button,
}

export const DefaultButton = () => <Button onClick={action("clicked")}>Hello Button</Button>
export const DisabledButton = () => (
  <Button onClick={action("clicked")} disabled>
    Disabled Button
  </Button>
)
