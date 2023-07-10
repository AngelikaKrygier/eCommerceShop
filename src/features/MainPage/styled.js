import styled, { css } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    grid-template-columns: 1fr;
    align-content: center;
  }
`;

export const Image = styled.img`
  max-width: 600px;
  width: 100%;

  ${({ additionalStyles }) =>
    additionalStyles &&
    css`
      margin-top: 90px;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    justify-self: center;
    margin: 10px;
  }
`;
