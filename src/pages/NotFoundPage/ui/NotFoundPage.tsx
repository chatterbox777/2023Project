import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import classes from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation('main');

  return (
    <div className={classNames(classes.NotFoundPage, {}, [className])}>
      {t('main:pageNotFound')}
    </div>
  );
};
