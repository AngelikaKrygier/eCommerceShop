import { Button, Input, InputName, UserLoginWidnow } from "./styled";

export const Login = () => (
  <UserLoginWidnow>
    <InputName>Login:</InputName>
    <Input></Input>
    <InputName>Hasło:</InputName>
    <Input></Input>
    <Button>Zaloguj</Button>
  </UserLoginWidnow>
);
