import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button';
import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const handleToggleModal = () => {
    setIsAuthModal((prevOpenState) => !prevOpenState);
  };
  const handleCloseModal = () => {
    setIsAuthModal(false);
  };

  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <Button
        className={classes.links}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={handleToggleModal}
      >
        {t('main:Enter')}
      </Button>
      {/* eslint-disable-next-line */}
      <Modal isOpen={isAuthModal} onClose={handleCloseModal}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolore
        fugit quae magnam voluptatum fuga totam debitis earum maxime, modi
        reprehenderit itaque. Quia ut vero, repudiandae pariatur placeat nemo
        labore?
      </Modal>
    </div>
  );
};
