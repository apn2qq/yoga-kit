import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"

import styles from "./button.module.scss"

export function Button({ children, disabled, name, type, value, loading, size, ...props }) {
  console.log(disabled)
  return (
    <button
      className={clsx(styles.button, {
        [styles.disabled]: disabled,
        [styles.small]: size === "small",
        [styles.huge]: size === "huge",
      })}
      {...{ disabled, name, type, value, loading }}
      {...props}
    >
      {children}
    </button>
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
