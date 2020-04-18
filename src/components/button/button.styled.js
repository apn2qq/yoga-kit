import styled, { css } from "styled-components/macro"

export const StyledButton = styled.button`
  ${resetDefaultStyles()};
  border-radius: 5px;

  ${({ size }) =>
    size === "small" &&
    css`
      font-size: 14px;
    `}

  ${({ size }) =>
    size === "big" &&
    css`
      font-size: 16px;
    `}
`

function resetDefaultStyles() {
  return `
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
`
}
