import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { Button, ThemeButton } from 'shared/ui/Button';

import classes from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <Button
      className={classNames(classes.LangSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggleLanguage}
    >
      {t('toggleLan')}
    </Button>
  );
};
