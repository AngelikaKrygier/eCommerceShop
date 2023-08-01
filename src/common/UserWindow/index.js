import {
  Button,
  Input,
  InputName,
  Paragraph,
  UserForm,
  StyledNavLink,
} from "./styled";
import { useRef } from "react";

export const UserWindow = ({
  userName,
  password,
  button,
  paragraph,
  nameLink,
  navLink,
  email,
  createAccount,
  onFormSubmit,
  userNameInputRef,
  userPasswordRef
}) => {

  

  return (
    <UserForm onSubmit={onFormSubmit}>
      <InputName>{userName}</InputName>
      <Input ref={userNameInputRef} type="email"></Input>
      <InputName>{password}</InputName>
      <Input ref={userPasswordRef} type="password"></Input>
      <Button>{button}</Button>
      <Paragraph>
        {paragraph}
        <StyledNavLink to={navLink}>{nameLink}</StyledNavLink>
      </Paragraph>
    </UserForm>
  );
};
