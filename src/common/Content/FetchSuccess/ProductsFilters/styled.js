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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    padding: 5px;
    margin-bottom: 10px;
  }
`;

export const Label = styled.label`
  padding: 10px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    padding: 5px;
  }
`;

export const Fieldset = styled.fieldset`
  border: none;
  margin: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.form.input};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin: 5px 0;
    padding: 0;
  }
`;

export const Input = styled.input`
  margin: 0 10px;
  width: 16px;
  height: 16px;
  border: 2px solid ${({ theme }) => theme.colors.form.input};
  border-radius: 2px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin: 0 5px;
    width: 10px;
    height: 10px;
  }
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  list-style: none;
  padding: 8px 0;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 14px;
    padding: 4px 0;
  }
`;

export const FiledTitle = styled.div`
  margin: 0 0 20px 0;
  font-weight: ${({ theme }) => theme.fontWeight.hardBold};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 12px;
    margin: 0 0 10px 0;
  }
`;

export const Button = styled.button`
  justify-self: end;
  margin: 10px auto;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  background-color: ${({ theme }) => theme.colors.form.background};
  color: ${({ theme }) => theme.colors.form.color};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin: 5px auto;
    padding: 5px;
  }
`;
