import React from "react"
import clsx from "clsx"
import styles from "./grid.module.scss"

export function Col({ col, lg, sm, xs, children }) {
  return (
    <div
      className={clsx(styles.col, {
        [styles[`col-${col}`]]: col,
        [styles[`col-lg-${lg}`]]: lg,
      })}
    >
      {children}
    </div>
  )
}
