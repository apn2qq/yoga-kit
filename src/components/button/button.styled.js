import styled, { css } from "styled-components/macro"

export const StyledButton = styled.button`
  ${resetDefaultStyles()};
  border-radius: 5px;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.base.color1};

  &:hover {
    cursor: pointer;
  }

  ${({ size }) =>
    size === "small" &&
    css`
      font-size: 14px;
      padding: 10px 14px;
    `}

  ${({ size }) =>
    size === "big" &&
    css`
      font-size: 16px;
      padding: 13px 20px;
    `};
`

function resetDefaultStyles() {
  return css`
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
