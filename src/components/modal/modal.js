import React, { useEffect } from "react"
import PropTypes from "prop-types"

export function Modal({ children, open, handleCloseClick, handleOpenClick, ...props }) {
  // Prevent scroll when modal window is open
  useEffect(() => {
    const body = document.querySelector("body")
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth

    if (open) {
      const scrollY = window.scrollY
      body.setAttribute(
        "style",
        `overflow-y: hidden; position: fixed; top: -${scrollY}px; padding-right: ${scrollBarWidth}px`
      )
    }

    if (!open) {
      const scrollY = body.style.top
      if (scrollY !== "") {
        body.style.overflowY = null
        body.style.position = null
        body.style.top = null
        body.style.paddingRight = null
        window.scrollTo(0, parseInt(scrollY || "0") * -1)
      }
    }
  }, [open])

  return (
    open && (
      <aside open={open} {...props}>
        <div>{children}</div>
        <div onClick={handleCloseClick}></div>
      </aside>
    )
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  handleCloseClick: PropTypes.func.isRequired,
  handleOpenClick: PropTypes.func.isRequired,
}
