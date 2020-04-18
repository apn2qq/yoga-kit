import React from "react"
import clsx from "clsx"
import styles from "./grid.module.scss"

export function Grid({ children }) {
  return <div className={clsx(styles.grid)}>{children}</div>
}
