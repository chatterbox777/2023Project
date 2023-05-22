import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button";
import { useTranslation } from "react-i18next";
import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="counter-value">{counterValue}</h1>
      <Button data-testid="counter-increment" onClick={increment}>
        {t("main:increment")}
      </Button>
      <Button data-testid="counter-decrement" onClick={decrement}>
        {t("main:decrement")}
      </Button>
    </div>
  );
};
