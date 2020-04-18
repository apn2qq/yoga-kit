import styled, { css } from "styled-components/macro"
export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(24, minmax(1px, 4.16666666%));
  gap: 16px;
  margin: 0 auto;
  background: #fbfbfb;
  min-height: 200px;
  grid-auto-flow: dense;
  ${({ fields }) =>
    fields &&
    css`
      max-width: ${1136 + fields}px;
      padding: 0 ${fields}px;
    `}
`
