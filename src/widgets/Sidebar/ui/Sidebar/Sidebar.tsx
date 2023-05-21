import { useState } from 'react';

import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

import { Button, ButtonTheme } from 'shared/ui/Button';
import { ButtonSize } from 'shared/ui/Button/ui/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const handleToggle = () => {
    setCollapsed((prev) => !prev);
  };
  const { t } = useTranslation();

  return (
    <div
      data-testid='sidebar'
      className={classNames(
        classes.Sidebar,
        { [classes.collapsed]: collapsed },
        [className]
      )}
    >
      <Button
        theme={ButtonTheme.BACKGROUND_INVERTED}
        className={classes.collapseBtn}
        data-testid='sidebar-toggle'
        type='button'
        onClick={handleToggle}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={classes.items}>
        <div className={classes.item}>
          <AppLink
            className={classes.link}
            theme={AppLinkTheme.SECONDARY}
            to={RoutePath.main}
          >
            <MainIcon />
            <span>{t('translation:mainPage')}</span>
          </AppLink>
        </div>

        <div className={classes.item}>
          <AppLink
            className={classes.link}
            theme={AppLinkTheme.SECONDARY}
            to={RoutePath.about}
          >
            <AboutIcon />
            <span>{t('about:aboutPage')}</span>
          </AppLink>
        </div>
      </div>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={classes.lang} />
      </div>
    </div>
  );
};
