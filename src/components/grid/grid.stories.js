import React from "react"
import { withKnobs, number } from "@storybook/addon-knobs"

import { Grid as GridComponent } from "src/components/grid"
import { Col as ColComponent } from "src/components/grid"

export function Grid() {
  const gridFields = {
    fields: 20,
  }
  const colSizes = {
    first: 24,
    second: 12,
    third: 8,
  }
  return (
    <GridComponent fields={number("Fields", gridFields.fields)}>
      <ColComponent basic={number("Full", colSizes.first)}></ColComponent>
      <ColComponent basic={number("Half", colSizes.second)}></ColComponent>
      <ColComponent basic={number("Half", colSizes.second)}></ColComponent>
      <ColComponent basic={number("Third", colSizes.third)}></ColComponent>
      <ColComponent basic={number("Third", colSizes.third)}></ColComponent>
      <ColComponent basic={number("Third", colSizes.third)}></ColComponent>
    </GridComponent>
  )
}

export default {
  title: "Components",
  decorators: [withKnobs],
}
