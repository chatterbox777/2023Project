import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation(['main', 'translation']);

  return (
    <div>
      {t('translation:mainPage')}
      <br />
      {t('main:newTestTranslation')}
    </div>
  );
};

export default MainPage;
