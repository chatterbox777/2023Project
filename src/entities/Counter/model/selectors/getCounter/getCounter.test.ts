import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { getCounter } from "./getCounter";

describe("getCounter", () => {
  test("getCounter should return counter", () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 0 },
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 0 });
  });
});
