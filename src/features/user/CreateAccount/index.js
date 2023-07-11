import { UserWindow } from "../../../common/UserWindow";
import { toShopRules } from "../../../root/routes";

export const CreateAccount = () => (
  <UserWindow
    userName={"Nazwa Użytkownika"}
    password={"Hasło"}
    button={"Załóż Konto"}
    paragraph={
      "Zakładając konto akceptujesz regulamin sklepu. Koniecznie zapoznaj się z "
    }
    nameLink={"regulaminem sklepu"}
    navLink={toShopRules}
    email={"e-mail"}
    createAccount
  />
);
