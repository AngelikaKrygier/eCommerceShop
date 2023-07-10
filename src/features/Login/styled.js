import styled from "styled-components";

export const UserLoginWidnow = styled.form`
  max-width: 600px;
  max-height: 300px;
  width: 100%;
  height: 100%;
  justify-self: center;
  margin: 20px;
  padding: 40px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr 1fr auto;
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
