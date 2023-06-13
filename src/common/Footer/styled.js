import styled, { css } from "styled-components";

export const StyledFooter = styled.footer`
  padding: 10px 30px;
  background-color: ${({ theme }) => theme.colors.footer.background};
  display: grid;
  grid-template-columns: auto auto;
  gap: 30px;
  align-items: center;
  justify-content: center;
`;

export const Address = styled.div`
  display: grid;
  grid-gap: 10px;
`;

export const Paragraph = styled.p`
  margin: 0;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.footer.font};

  ${({ clause }) =>
    clause &&
    css`
      font-size: 12px;
      grid-column: span 2;
    `}
`;
