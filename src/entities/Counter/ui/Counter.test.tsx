import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Counter } from "./Counter";

describe("Counter", () => {
  test("check counter value", () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });

    expect(screen.getByTestId("counter-value")).toHaveTextContent("10");
  });
  test("check counter increment", async () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    await userEvent.click(screen.getByTestId("counter-increment"));
    expect(screen.getByTestId("counter-value")).toHaveTextContent("11");
  });
  test("check counter decrement", async () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });

    await userEvent.click(screen.getByTestId("counter-decrement"));
    expect(screen.getByTestId("counter-value")).toHaveTextContent("9");
  });
});
