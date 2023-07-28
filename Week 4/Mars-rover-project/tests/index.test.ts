import { defineMap } from "../src/index";
import { Grid, CoOrdinate } from "../src/Types/Map";
import { rover, moveRover } from "../src/Types/Vehicles";

import "jest";

describe("Test environment", () => {
  test("Ensure the map has generated correctly", () => {
    //expect(Grid.XMax).toBe(100);
    //expect(Grid.YMax).toBe(100);
  });
});
describe("test rover functions", () => {
  test("Test normal rover movement and params", () => {
    expect(moveRover(1, 1)).toBe("Success, new co-ordinates: 51,51");
    expect(moveRover(-1, 0)).toBe("Success, new co-ordinates: 50,51");
    expect(moveRover(0, -2)).toBe("Success, new co-ordinates: 50,49");
  });
  test("Test rover movement in edge cases(eg.going out of bounds)", () => {});
});
describe("Test other vic functions", () => {});

describe("Test extra features", () => {});
