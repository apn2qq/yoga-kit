import styled, { css } from "styled-components/macro"
export const StyledCol = styled.div`
  overflow: hidden;
  grid-column: span 24;
  ${({ basic }) =>
    basic < 25 &&
    css`
      grid-column: span ${basic};
    `}
  min-height: 40px;
  background: #ffffff;
  border: 1px solid #d5dce3;
  box-sizing: border-box;
  border-radius: 3px;
`
