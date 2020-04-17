import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components/macro"

export function Button({ children, disabled, name, type, value, loading, size, ...props }) {
  return (
    <StyledButton {...{ disabled, name, type, value, loading }} {...props}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  border-radius: 5px;
  background-color: ${(props) => props.backgroundColor};
`

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  loading: PropTypes.bool,
  size: PropTypes.string,
}
