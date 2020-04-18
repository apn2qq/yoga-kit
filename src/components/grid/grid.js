import React from "react"
import PropTypes from "prop-types"

import { StyledGrid } from "./grid.styled"

export function Grid({ fields, children }) {
  return <StyledGrid fields={fields}>{children}</StyledGrid>
}

Grid.propTypes = {
  fields: PropTypes.number,
  children: PropTypes.node,
}
