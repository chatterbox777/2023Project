import { Counter } from "entities/Counter";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation(["main", "translation"]);

  return (
    <div>
      {t("translation:mainPage")}
      <br />
      {t("main:newTestTranslation")}
      <Counter />
    </div>
  );
};

export default MainPage;
