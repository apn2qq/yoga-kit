import React from "react"
import PropTypes from "prop-types"

import { StyledInput } from "./input.styled"

export function Input({ skin = "primary", type, placeholder, name, id, transparent, ...rest }) {
  return (
    <StyledInput
      skin={skin}
      type={type}
      placeholder={placeholder}
      name={name}
      id={id}
      transparent={transparent}
      {...rest}
    ></StyledInput>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
}
