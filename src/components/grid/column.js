import React from "react"
import PropTypes from "prop-types"

import { StyledCol } from "./column.styled"

export function Col({ basic, lg, md, sm, children }) {
  return <StyledCol basic={basic}>{children}</StyledCol>
}

Col.propTypes = {
  basic: PropTypes.number,
  children: PropTypes.node,
}
