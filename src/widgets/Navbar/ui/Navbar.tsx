import { classNames } from "shared/lib/classNames/classNames";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Button, ButtonTheme } from "shared/ui/Button";
import { LoginModal } from "features/AuthByUsername";
import classes from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const handleShowModal = () => {
    setIsAuthModal(true);
  };
  const handleCloseModal = () => {
    setIsAuthModal(false);
  };

  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <Button
        className={classes.links}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={handleShowModal}
      >
        {t("main:Enter")}
      </Button>
      {/* eslint-disable-next-line */}
      <LoginModal isOpen={isAuthModal} onClose={handleCloseModal} />
    </div>
  );
};
