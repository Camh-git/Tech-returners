import { defineMap } from "../src/index";
import { Grid, CoOrdinate } from "../src/Types/Map";

import "jest";

describe("Test environment", () => {
  test("Ensure the map has generated correctly", () => {
    //expect(Grid.XMax).toBe(100);
    //expect(Grid.YMax).toBe(100);
  });
});
describe("test rover functions", () => {
  test("Test normal rover movement and params", () => {
    expect(1 + 1).toBe(2);
  });
  test("Test rover movement in edge cases(eg.going out of bounds)", () => {});
});
describe("Test other vic functions", () => {});

describe("Test extra features", () => {});
