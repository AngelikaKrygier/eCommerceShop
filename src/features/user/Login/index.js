import { toCreateAccount } from "../../../root/routes";
import { UserWindow } from "../../../common/UserWindow";

export const Login = () => {
  return (
    <UserWindow
      userName={"Login"}
      password={"Hasło"}
      button={"Zaloguj"}
      paragraph={"Nie masz konta? "}
      nameLink={"Załóż konto"}
      navLink={toCreateAccount}
    />
  );
};
