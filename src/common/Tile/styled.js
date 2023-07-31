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
      grid-template-columns: auto 1fr;
      grid-template-rows: auto auto 1fr 1fr;
      background-color: ${({ theme }) => theme.colors.tile.background};

      @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
        grid-template-columns: 1fr;
      }
    `}
`;

export const Header = styled.h3`
  margin: 0 0 10px;
  padding: 10px 20px;
  font-size: 15px;

  ${({ productDetails }) =>
    productDetails &&
    css`
      font-size: 30px;

      @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
        font-size: 20px;
      }
    `}
`;

export const Image = styled.img`
  border-radius: 10px;
  max-width: 180px;

  ${({ productDetails }) =>
    productDetails &&
    css`
      max-width: 600px;
      box-shadow: ${({ theme }) => theme.boxShadow};
      grid-row: 1 / span 3;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        max-width: 400px;
      }
    `}
`;

export const Description = styled.p`
  text-align: center;
  font-size: 13px;

  ${({ productDetails }) =>
    productDetails &&
    css`
      font-size: 19px;
      line-height: 1.4;
      padding: 0 20px;
    `}
`;

export const Price = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: 0px;

  ${({ productDetails }) =>
    productDetails &&
    css`
      margin: 5px;
      padding: 10px;
      border-radius: 20px;
      font-size: 30px;
      background-color: ${({ theme }) => theme.colors.tile.priceBackground};

      @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
        font-size: 30px;
      }
    `}
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

export const StyledNavLink = styled(NavLink)``;

export const MiniatureImagesWrapper = styled.div`
  display: flex;
`;

export const MiniatureImage = styled.img`
`