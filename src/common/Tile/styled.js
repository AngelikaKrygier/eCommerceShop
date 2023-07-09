import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled, { css } from "styled-components";

export const StyledTile = styled.div`
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding: 20px;
  margin: 5px;
  box-shadow: ${({ theme }) => theme.boxShadow};

  ${({ productDetails }) =>
    productDetails &&
    css`
      grid-template-columns: 1fr 1fr;
    `}
`;

export const Header = styled.h3`
  margin: 0 0 10px;
`;

export const Image = styled.img`
  border-radius: 10px;
  max-width: 180px;
`;

export const Description = styled.p`
  text-align: center;
  font-size: 13px;
`;

export const Price = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  color: ${({ theme }) => theme.colors.button.fontColor};
  background-color: ${({ theme }) => theme.colors.button.background};

  ${({ productDetails }) =>
    productDetails &&
    css`
      display: none;
    `}
`;

export const StyledNavLink = styled(NavLink)`
`