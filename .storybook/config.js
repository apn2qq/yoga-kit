import React from "react"
import { ThemeProvider } from "styled-components"
import { addDecorator, addParameters } from "@storybook/react"

import { GlobalStyle } from "src/assets/styles/global"
import { theme } from "src/assets/styles/theme"

// +Global styles and theme
addDecorator((storyFn) => (
  <React.Fragment>
    <GlobalStyle></GlobalStyle>
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  </React.Fragment>
))
// -Global styles and theme

// +Preview backgrounds
const themeColors = [
  ...Object.entries(theme.colors.base),
  ...Object.entries(theme.colors.grey),
].reduce((acc, current) => {
  const [name, value] = current
  return [...acc, { name, value }]
}, [])

const backgrounds = [{ name: "white", value: "#fff", default: true }]

addParameters({
  backgrounds: [...backgrounds, ...themeColors],
})
// -Preview backgrounds
