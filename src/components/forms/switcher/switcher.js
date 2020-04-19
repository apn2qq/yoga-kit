import React, { useRef, useState } from "react"
import PropTypes from "prop-types"

import { StyledSwitcher } from "./switcher.styled"

export function Switcher({ name, id, checked = false, size = "small", ...rest }) {
  const ref = useRef()
  const [isChecked, setIsChecked] = useState(checked)

  function handleChange() {
    setIsChecked(ref.current.checked)
  }

  return (
    <StyledSwitcher checked={isChecked} size={size}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        ref={ref}
        name={name}
        id={id}
        {...rest}
      ></input>
    </StyledSwitcher>
  )
}

Switcher.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  checked: PropTypes.bool,
}
