import {
  startUp,
  listVics,
  parseCoOrd,
  switchVic,
  proccessInput,
  checkForCollision,
} from "../src/index";
import { Grid, CoOrdinate } from "../src/Types/Map";
import * as inputs from "../src/index";
import { Vehicle, moveHelicopter } from "../src/Types/Vehicles";
import "jest";

/*setup map*/
const testMap: Grid = { XMax: 5, YMax: 5, blockedTiles: [[4, 4]] };
describe("Test environment", () => {
  test("Ensure the map has generated correctly", () => {
    expect(testMap.XMax).toBe(5);
    expect(testMap.YMax).toBe(5);
    expect(testMap.blockedTiles).toStrictEqual([[4, 4]]);
  });
});

/*Extra features*/

describe("Test user input", () => {});

describe("Test fleet managment features", () => {
  const testVics: Array<Vehicle> = [
    {
      name: "testLander",
      position: [1, 1],
      oritentation: "N",
      vicType: "Lander",
      tools: [],
    },
    {
      name: "testRover",
      position: [1, 1],
      oritentation: "N",
      vicType: "Rover",
      tools: [],
    },
    {
      name: "testChopper",
      position: [1, 1],
      oritentation: "N",
      vicType: "Helicopter",
      tools: [],
    },
  ];
  let selectedVic: Vehicle = testVics[0];
  test("List deployed vehicles", () => {
    expect(listVics(testVics)).toBe(
      "0:testLander, type: Lander\n1:testRover, type: Rover\n2:testChopper, type: Helicopter\n"
    );
  });
  test("Test switch vehicles", () => {
    expect(switchVic("testChopper", testVics)).toBe("testChopper");
    expect(switchVic("testRover", testVics)).toBe("testRover");
    expect(switchVic("testLander", testVics)).toBe("testLander");
  });
  test("Ensure collision avoidance works", () => {
    expect(checkForCollision([5, 5], testVics)).toBe(false);
    expect(checkForCollision([1, 1], testVics)).toBe(true);
  });
});

describe("Test extra features", () => {
  test("test signal delay change function", () => {
    expect(inputs.signalDelay).toBe(0);
    inputs.setDelay(1);
    expect(inputs.signalDelay).toBe(1);
    inputs.setDelay(10);
    expect(inputs.signalDelay).toBe(10);
    inputs.setDelay(-1);
    expect(inputs.signalDelay).toBe(0);
  });
  test("parse coOrd", () => {
    expect(parseCoOrd("1,2")).toStrictEqual([1, 2]);
  });
});
