import { defineMap } from "../src/index";
import { Grid, CoOrdinate } from "../src/Types/Map";
import { Vehicle, moveRover } from "../src/Types/Vehicles";
import * as inputs from "../src/index";

import "jest";

describe("Test environment", () => {
  test("Ensure the map has generated correctly", () => {
    //expect(Grid.XMax).toBe(100);
    //expect(Grid.YMax).toBe(100);
  });
});
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
    postion: [5, 5],
    oritentation: "N",
    vicType: "Rover",
    tools: [],
  };
  test("Test normal rover movement and params", () => {
    expect(moveRover(1, 1, testRover)).toBe("Success, new co-ordinates: 51,51");
    expect(moveRover(-1, 0, testRover)).toBe(
      "Success, new co-ordinates: 50,51"
    );
    expect(moveRover(0, -2, testRover)).toBe(
      "Success, new co-ordinates: 50,49"
    );
  });
  test("Test rover movement in edge cases(eg.going out of bounds)", () => {});
});

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
