import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';

import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(classes.Navbar, {}, [className])}>
    <div className={classes.links}>
      <AppLink theme={AppLinkTheme.SECONDARY} to='/'>
        Главная
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>
        О сайте
      </AppLink>
    </div>
  </div>
);
