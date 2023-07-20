import styled from "styled-components";
import { ReactComponent as Error } from "../../../images/no-results.svg";

export const StateErrorWrapper = styled.div`
  margin: 40px auto;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  justify-content: center;
  align-items: center;
  grid-gap: 20px;
`;

export const StyledError = styled(Error)`
  max-width: 400px;
`;

export const Paragraph = styled.p`
  padding: 0;
  align-items: start;
  font-size: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 9px;
  }
`;
