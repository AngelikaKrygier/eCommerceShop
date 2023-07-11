import {
  Button,
  Input,
  InputName,
  Paragraph,
  UserLoginForm,
  StyledNavLink,
} from "./styled";
import { toCreateAccount } from "../../../root/routes";

export const Login = () => {
  return (
    <UserLoginForm>
      <InputName>Login:</InputName>
      <Input></Input>
      <InputName>Hasło:</InputName>
      <Input></Input>
      <Button>Zaloguj</Button>
      <Paragraph>
        Nie masz konta?{" "}
        <StyledNavLink to={toCreateAccount}>
            Załóż Konto!
        </StyledNavLink>
      </Paragraph>
    </UserLoginForm>
  );
};
