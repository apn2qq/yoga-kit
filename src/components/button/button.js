import React from "react"
import PropTypes from "prop-types"

import styles from "./button.module.scss"

export function Button({ children, disabled, name, type, value, loading, ...props }) {
  return (
    <button className={styles.button} {...{ disabled, name, type, value, loading }} {...props}>
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
}
