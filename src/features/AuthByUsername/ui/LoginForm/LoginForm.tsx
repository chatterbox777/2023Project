import { classNames } from "shared/lib/classNames/classNames";

import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button";
import { Input } from "shared/ui/Input/Input";
import classes from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(classes.LoginForm, {}, [className])}>
      <Input
        autofocus
        className={classes.input}
        type="text"
        placeholder={t("enterLogin")}
      />
      <Input
        className={classes.input}
        type="text"
        placeholder={t("enterPass")}
      />
      <Button className={classes.loginBtn}>{t("Войти")}</Button>
    </div>
  );
};
