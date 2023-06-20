import styled from "styled-components";

export const StyledClothingFilters = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr 1fr;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.colors.content.background};
`;

export const Form = styled.form`
  padding: 10px;
  margin-bottom: 20px;
  display: grid;
`;

export const Label = styled.label`
  padding: 10px;
  text-align: center;
`;

export const Fieldset = styled.fieldset`
  border: none;
  margin: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.form.input};
`;

export const Input = styled.input`
  margin: 0 10px;
  width: 16px;
  height: 16px;
  border: 2px solid ${({ theme }) => theme.colors.form.input};
  border-radius: 2px;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  list-style: none;
  padding: 8px 0;
  margin: 0;
`;

export const FiledTitle = styled.div`
  margin: 0 0 20px 0;
  font-weight: ${({ theme }) => theme.fontWeight.hardBold};
`;

export const Button = styled.button`
  justify-self: end;
  margin: 10 auto;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.form.background};
  color: ${({ theme }) => theme.colors.form.color};
`;
