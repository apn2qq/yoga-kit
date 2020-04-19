import styled, { css } from "styled-components/macro"

export const StyledButton = styled.button`
  ${resetDefaultStyles()};
  border-radius: 5px;
  transition: opacity 0.2s;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
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

  ${({ skin, theme }) =>
    skin === "primary" &&
    css`
      background-color: ${theme.colors.base.color3};
      color: #fff;
    `};

  ${({ skin, theme }) =>
    skin === "outline" &&
    css`
      background-color: transparent;
      color: ${theme.colors.base.color1};
      border: 1px solid ${theme.colors.grey.grey4};
    `};

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background-color: ${theme.colors.grey.grey5};
      color: ${theme.colors.grey.grey2};

      &:hover {
        cursor: not-allowed;
      }
    `}
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
