import styled, { css } from "styled-components/macro"

export const StyledSwitcher = styled.label`
  position: relative;
  cursor: pointer;

  input {
    display: none;
  }

  &:before {
    content: "";
    position: absolute;
    top: -4px;
    left: 0;
    background-color: #cdd1da;
    box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in;
  }

  &:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease-in;
  }

  ${({ size }) =>
    size === "small" &&
    css`
      &:before {
        top: -4px;
        left: 0;
        width: 50px;
        height: 26px;
        border-radius: 13px;
      }

      &:after {
        top: -2px;
        left: 2px;
        width: 22px;
        height: 22px;
      }

      ${({ checked }) =>
        checked &&
        css`
          &:before {
            background: #9fd468;
          }
          &:after {
            left: 26px;
          }
        `}
    `}

  ${({ size }) =>
    size === "big" &&
    css`
      &:before {
        top: -4px;
        left: 0;
        width: 64px;
        height: 32px;
        border-radius: 24px;
      }

      &:after {
        top: -2px;
        left: 2px;
        width: 28px;
        height: 28px;
      }

      ${({ checked }) =>
        checked &&
        css`
          &:before {
            background: #9fd468;
          }
          &:after {
            left: 34px;
          }
        `}
    `}
`
