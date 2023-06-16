import styled from "styled-components";

export const StyledTile = styled.div`
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding: 20px;
  box-shadow: ${({ theme }) => theme.boxShadow};
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

export const Prise = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  color: ${({ theme }) => theme.colors.button.fontColor};
  background-color: ${({ theme }) => theme.colors.button.background};
`;
