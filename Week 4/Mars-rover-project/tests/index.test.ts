import { defineMap } from "../src/index";
import { Grid, CoOrdinate } from "../src/Types/Map";
import { Vehicle, moveRover, basicMoveRover } from "../src/Types/Vehicles";
import * as inputs from "../src/index";

import "jest";

describe("Test environment", () => {
  test("Ensure the map has generated correctly", () => {
    //expect(Grid.XMax).toBe(100);
    //expect(Grid.YMax).toBe(100);
  });
});

/*Rover movement controls */
describe("test rover rotation", () => {
  let testRover: Vehicle = {
    postion: [5, 5],
    oritentation: "N",
    vicType: "Rover",
    tools: [],
  };
  test("Test rover rotation back and forth", () => {
    expect(testRover.oritentation).toBe("N"); //sanity check to make sure it's facing the right way first
    inputs.rotate("L", testRover);
    expect(testRover.oritentation).toBe("W");
    inputs.rotate("R", testRover);
    expect(testRover.oritentation).toBe("N");
    inputs.rotate("R", testRover);
    inputs.rotate("R", testRover);
    expect(testRover.oritentation).toBe("S");
    inputs.rotate("L", testRover);
    expect(testRover.oritentation).toBe("E");
    inputs.rotate("L", testRover);
    expect(testRover.oritentation).toBe("N");
  });

  test("Test turning the rover a full loop left", () => {
    testRover.oritentation = "N";
    inputs.rotate("L", testRover);
    expect(testRover.oritentation).toBe("W");
    inputs.rotate("L", testRover);
    expect(testRover.oritentation).toBe("S");
    inputs.rotate("L", testRover);
    expect(testRover.oritentation).toBe("E");
    inputs.rotate("L", testRover);
    expect(testRover.oritentation).toBe("N");
  });

  test("Test turning the rover a full loop right", () => {
    testRover.oritentation = "N";
    inputs.rotate("R", testRover);
    expect(testRover.oritentation).toBe("E");
    inputs.rotate("R", testRover);
    expect(testRover.oritentation).toBe("S");
    inputs.rotate("R", testRover);
    expect(testRover.oritentation).toBe("W");
    inputs.rotate("R", testRover);
    expect(testRover.oritentation).toBe("N");
  });
});
describe("Test rover movement", () => {
  let testRover: Vehicle = {
    postion: [1, 1],
    oritentation: "N",
    vicType: "Rover",
    tools: [],
  };
  let testMap: Grid = { XMax: 5, YMax: 5, blockedTiles: [[4, 4]] };
  test("Test basic movement in various orientations", () => {
    testRover.oritentation = "N";
    basicMoveRover(testRover, testMap);
    expect(testRover.postion).toStrictEqual([2, 1]);

    testRover.oritentation = "E";
    basicMoveRover(testRover, testMap);
    expect(testRover.postion).toStrictEqual([2, 2]);

    testRover.oritentation = "S";
    basicMoveRover(testRover, testMap);
    expect(testRover.postion).toStrictEqual([1, 2]);

    testRover.oritentation = "W";
    basicMoveRover(testRover, testMap);
    expect(testRover.postion).toStrictEqual([1, 1]);
  });

  test("Test rover movement with command strings", () => {});
  test("Test rover movement in edge cases(eg.going out of bounds)", () => {
    //bad vic type, out of bounds, forbidden blocks
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
});
