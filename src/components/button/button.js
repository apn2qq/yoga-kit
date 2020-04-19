import React from "react"
import PropTypes from "prop-types"

import { StyledButton } from "./button.styled"

export function Button({
  skin = "primary",
  size = "small",
  label,
  disabled,
  name,
  type,
  value,
  loading,
  ...rest
}) {
  return (
    <StyledButton
      size={size}
      skin={skin}
      disabled={disabled}
      name={name}
      type={type}
      value={value}
      loading={loading}
      {...rest}
    >
      {label}
    </StyledButton>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  loading: PropTypes.bool,
  size: PropTypes.string,
  skin: PropTypes.string,
}
