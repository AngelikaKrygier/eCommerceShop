import styled from "styled-components";

export const StyledMenu = styled.nav`
  color: ${({ theme }) => theme.colors.menu.font};
  background: ${({ theme }) => theme.colors.menu.background};
  margin: 0;
  display: flex;
  gap: 40px;
  justify-content: center;
  padding: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export const MenuItem = styled.button`
  border: none;
  background-color: transparent;
  color: white;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.menu.hoverListItem};
    color: ${({ theme }) => theme.colors.menu.hoverFontListItem};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    padding: 7px;
  }
`;
