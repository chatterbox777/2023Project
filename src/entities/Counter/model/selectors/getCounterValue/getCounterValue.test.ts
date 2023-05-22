import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { getCounterValue } from "./getCounterValue";

describe("getCounterValue", () => {
  test("getCounterValue return counter value", () => {
    const state: DeepPartial<StateSchema> = { counter: { value: 1 } };
    expect(getCounterValue(state as StateSchema)).toEqual(1);
  });
});
