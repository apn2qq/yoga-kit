import React from "react"
import PropTypes from "prop-types"
// import clsx from "clsx"

import styles from "./modal.module.scss"

// TODO: useOnClickOutide
// TODO: Open handler, close handler
// TODO: Cross icon
// TODO: Calculate gap for scrollbar
// TODO: Amimate on appearing/disappearing

export function Modal({ children, visible, handleCloseClick, handleOpenClick, ...props }) {
  return (
    <dialog className={styles.modal} {...props}>
      <div className={styles.inner}>{children}</div>
    </dialog>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
}
