import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

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
  cursor: pointer;
  padding: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    padding: 7px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  padding: 8px;
  border-radius: 8%;

  &:hover {
    color: ${({ theme }) => theme.colors.menu.hoverFontListItem};
    background-color: ${({ theme }) => theme.colors.menu.hoverListItem};
  }
`;
