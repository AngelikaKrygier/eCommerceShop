import { UserWindow } from "../../../common/UserWindow";
import { toShopRules } from "../../../root/routes";
import { onCreateAccount } from "../onCreateAccount";
import { useRef } from "react";

export const CreateAccount = () => {
  const userNameInputRef = useRef(null);
  const userPasswordRef = useRef(null);

  const handleFormSubmit = () => {
    const userNameValue = userNameInputRef.current.value;
    const passwordValue = userPasswordRef.current.value;
    onCreateAccount(userNameValue, passwordValue);
  };

  return (
    <UserWindow
      userName={"E-mail"}
      password={"Hasło"}
      button={"Załóż Konto"}
      paragraph={
        "Zakładając konto akceptujesz regulamin sklepu. Koniecznie zapoznaj się z "
      }
      nameLink={"regulaminem sklepu"}
      navLink={toShopRules}
      email={"e-mail"}
      userNameInputRef={userNameInputRef}
      userPasswordRef={userPasswordRef}
      onFormSubmit={handleFormSubmit}
      createAccount
    />
  );
};
