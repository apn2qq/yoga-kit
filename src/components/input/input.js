import React from "react"
import PropTypes from "prop-types"

export function Input({ children, open, handleCloseClick, handleOpenClick, ...props }) {
  return (
    <aside open={open} {...props}>
      <div>{children}</div>
      <div onClick={handleCloseClick}></div>
    </aside>
  )
}

Input.propTypes = {
  children: PropTypes.node.isRequired,
}
