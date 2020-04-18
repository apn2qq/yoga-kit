import styled, { css } from "styled-components/macro"

export const StyledInput = styled.input`
  border-radius: 5px;
  border: 0;
  font-size: 16px;
  font-family: inherit;
  padding: 12px 16px;
  min-width: 240px;
  max-width: 100%;

  ${({ skin }) =>
    skin === "primary" &&
    css`
      background-color: ${({ theme }) => theme.colors.grey.grey5};
      color: ${({ theme }) => theme.colors.grey.grey2};

      &::placeholder {
        color: ${({ theme }) => theme.colors.grey.grey2};
      }
    `};

  ${({ skin }) =>
    skin === "outline" &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.colors.grey.grey2};
      border: 1px solid ${({ theme }) => theme.colors.grey.grey4};

      &::placeholder {
        color: ${({ theme }) => theme.colors.grey.grey2};
      }
    `};
`
