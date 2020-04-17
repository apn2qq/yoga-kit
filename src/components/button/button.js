import React from "react"
import PropTypes from "prop-types"

import { StyledButton } from "./button.styled"

export function Button({ children, disabled, name, type, value, loading, size, ...rest }) {
  return (
    <StyledButton
      disabled={disabled}
      name={name}
      type={type}
      value={value}
      loading={loading}
      size={size}
      {...rest}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  loading: PropTypes.bool,
  size: PropTypes.string,
}
