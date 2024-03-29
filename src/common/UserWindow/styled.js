import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export const UserForm = styled.form`
  max-width: 600px;
  max-height: 300px;
  width: 100%;
  height: 100%;
  justify-self: center;
  margin: 20px;
  padding: 40px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr 1fr auto auto;
  grid-gap: 20px;
  background: ${({ theme }) => theme.colors.loginWindow.background};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const InputName = styled.p``;

export const Input = styled.input`
  max-height: 40px;
`;

export const Button = styled.button`
  grid-column: 1 / 3;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  border: none;
  color: ${({ theme }) => theme.colors.button.fontColor};
  background-color: ${({ theme }) => theme.colors.button.background};
`;

export const Paragraph = styled.p`
  grid-column: 1 / 3;
  justify-self: center;
  text-align: center;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.baseFont};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.loginWindow.createAccountSpan};
  }
`;
