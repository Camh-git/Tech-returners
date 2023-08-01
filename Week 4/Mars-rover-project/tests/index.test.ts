import { startUp, listVics } from "../src/index";
import { Grid, CoOrdinate } from "../src/Types/Map";
import * as inputs from "../src/index";

import "jest";
import exp from "constants";
import { Vehicle } from "../src/Types/Vehicles";

/*setup map*/
describe("Test environment", () => {
  test("Ensure the map has generated correctly", () => {
    //expect(Grid.XMax).toBe(100);
    //expect(Grid.YMax).toBe(100);
  });
});

/*Extra features*/

describe("Test user input", () => {});

describe("Test switching between vics", () => {});

describe("Test using tools", () => {});

describe("Test extra features", () => {
  test("test signal delay change function", () => {
    expect(inputs.signalDelay).toBe(0);
    inputs.delay(1);
    expect(inputs.signalDelay).toBe(1);
    inputs.delay(10);
    expect(inputs.signalDelay).toBe(10);
    inputs.delay(-1);
    expect(inputs.signalDelay).toBe(0);
  });
  test("List deployed vehicles", () => {
    const testVics: Array<Vehicle> = [
      {
        name: "testLander",
        postion: [1, 1],
        oritentation: "N",
        vicType: "Lander",
        tools: [],
      },
      {
        name: "testRover",
        postion: [1, 1],
        oritentation: "N",
        vicType: "Rover",
        tools: [],
      },
      {
        name: "testChopper",
        postion: [1, 1],
        oritentation: "N",
        vicType: "Helicopter",
        tools: [],
      },
    ];
    expect(listVics(testVics)).toBe(
      "0:testLander, Lander\n1:testRover, Rover\n2:testChopper, Helicopter\n"
    );
  });
});
