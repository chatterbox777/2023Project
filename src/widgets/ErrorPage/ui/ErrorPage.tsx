import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import classes from './ErrorPage.module.scss';

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  const { t } = useTranslation('main');

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(classes.ErrorPage, {}, [className])}>
      <p>{t('main:errorBoundary')}</p>
      <button type='button' onClick={reloadPage}>
        {t('main:reloadPage')}
      </button>
    </div>
  );
};
