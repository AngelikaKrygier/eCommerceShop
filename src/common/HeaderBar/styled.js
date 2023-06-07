import styled from "styled-components";

export const StyledHeaderBar = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 40px;
  padding: 20px calc(10%);
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.colors.headerBar.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto auto;
    gap: 10px;
  }
`;

export const Header = styled.h1`
  margin: 0;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 30px;
  }
`;