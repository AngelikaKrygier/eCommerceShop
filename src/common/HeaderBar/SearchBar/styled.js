import styled from "styled-components";
import { ReactComponent as Icon } from "../../../images/Lupa.svg";

export const StyledSearchBar = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    gap: 10px;
    grid-column: span 2;
  }
`;

export const Search = styled.input`
  border-radius: 20px;
  padding: 5px 10px;
  font-size: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 15px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  width: 40px;
  cursor: pointer;
`;

export const ButtonIcon = styled(Icon)`
  max-width: 40px;
  cursor: pointer;
  &:hover {
    fill: ${({ theme }) => theme.colors.headerBar.hoverIcon};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 30px;
  }
`;
