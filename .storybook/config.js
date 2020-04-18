import React from "react"
import { ThemeProvider } from "styled-components"
import { addDecorator } from "@storybook/react"

import { GlobalStyle } from "src/assets/styles/global"
import { theme } from "src/assets/styles/theme"

addDecorator((storyFn) => (
  <React.Fragment>
    <GlobalStyle></GlobalStyle>
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  </React.Fragment>
))
