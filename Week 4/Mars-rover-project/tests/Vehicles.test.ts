import {
  Vehicle,
  moveHelicopter,
  moveLander,
  moveRover,
  rotate,
} from "../src/Types/Vehicles";
import { Grid, CoOrdinate } from "../src/Types/Map";

/*Rover movement controls */
describe("test rover rotation", () => {
  let testRover: Vehicle = {
    name: "testRover",
    postion: [5, 5],
    oritentation: "N",
    vicType: "Rover",
    tools: [],
  };
  test("Test rover rotation back and forth", () => {
    expect(testRover.oritentation).toBe("N"); //sanity check to make sure it's facing the right way first
    rotate("L", testRover);
    expect(testRover.oritentation).toBe("W");
    rotate("R", testRover);
    expect(testRover.oritentation).toBe("N");
    rotate("R", testRover);
    rotate("R", testRover);
    expect(testRover.oritentation).toBe("S");
    rotate("L", testRover);
    expect(testRover.oritentation).toBe("E");
    rotate("L", testRover);
    expect(testRover.oritentation).toBe("N");
  });

  test("Test turning the rover a full loop left", () => {
    testRover.oritentation = "N";
    rotate("L", testRover);
    expect(testRover.oritentation).toBe("W");
    rotate("L", testRover);
    expect(testRover.oritentation).toBe("S");
    rotate("L", testRover);
    expect(testRover.oritentation).toBe("E");
    rotate("L", testRover);
    expect(testRover.oritentation).toBe("N");
  });

  test("Test turning the rover a full loop right", () => {
    testRover.oritentation = "N";
    rotate("R", testRover);
    expect(testRover.oritentation).toBe("E");
    rotate("R", testRover);
    expect(testRover.oritentation).toBe("S");
    rotate("R", testRover);
    expect(testRover.oritentation).toBe("W");
    rotate("R", testRover);
    expect(testRover.oritentation).toBe("N");
  });
});
describe("Test rover movement", () => {
  let testRover: Vehicle = {
    name: "testRover",
    postion: [1, 1],
    oritentation: "N",
    vicType: "Rover",
    tools: [],
  };
  const testMap: Grid = { XMax: 5, YMax: 5, blockedTiles: [[4, 4]] };
  test("Test basic movement in various orientations", () => {
    testRover.oritentation = "N";
    moveRover(testRover, testMap);
    expect(testRover.postion).toStrictEqual([2, 1]);

    testRover.oritentation = "E";
    moveRover(testRover, testMap);
    expect(testRover.postion).toStrictEqual([2, 2]);

    testRover.oritentation = "S";
    moveRover(testRover, testMap);
    expect(testRover.postion).toStrictEqual([1, 2]);

    testRover.oritentation = "W";
    moveRover(testRover, testMap);
    expect(testRover.postion).toStrictEqual([1, 1]);
  });

  test("Test rover movement with command strings", () => {});
  test("Test rover movement in edge cases", () => {
    //Won't move wrong vic type
    testRover.vicType = "Boat";
    moveRover(testRover, testMap);
    expect(testRover.postion).toStrictEqual([1, 1]);
    //Won't go off top of map
    testRover.vicType = "Rover";
    testRover.postion = [5, 5];
    testRover.oritentation = "N";
    moveRover(testRover, testMap);
    expect(testRover.postion).toStrictEqual([5, 5]);
    //Won't go off bottom of map
    testRover.postion = [0, 0];
    testRover.oritentation = "S";
    moveRover(testRover, testMap);
    expect(testRover.postion).toStrictEqual([0, 0]);
    //Doesn't move onto forbidden square //Will add when adding extra map features
  });
});

/*Helicopter controls*/
describe("Test helicopter movement", () => {
  let testChopper: Vehicle = {
    name: "testChopper",
    postion: [1, 1],
    oritentation: "N",
    vicType: "Helicopter",
    tools: [],
  };
  const testMap: Grid = { XMax: 5, YMax: 5, blockedTiles: [[4, 4]] };
  test("Test flying in a loop", () => {
    moveHelicopter(testChopper, [2, 1], testMap);
    expect(testChopper.postion).toStrictEqual([2, 1]);
    moveHelicopter(testChopper, [2, 2], testMap);
    expect(testChopper.postion).toStrictEqual([2, 2]);
    moveHelicopter(testChopper, [1, 2], testMap);
    expect(testChopper.postion).toStrictEqual([1, 2]);
    moveHelicopter(testChopper, [1, 1], testMap);
    expect(testChopper.postion).toStrictEqual([1, 1]);
  });
  test("Test flying to random positions", () => {
    moveHelicopter(testChopper, [3, 3], testMap);
    expect(testChopper.postion).toStrictEqual([3, 3]);
    moveHelicopter(testChopper, [2, 4], testMap);
    expect(testChopper.postion).toStrictEqual([2, 4]);
    moveHelicopter(testChopper, [3, 1], testMap);
    expect(testChopper.postion).toStrictEqual([3, 1]);
  });
  test("Test helicopter movement in edge cases", () => {
    testChopper.postion = [1, 1];
    moveHelicopter(testChopper, [-1, -1], testMap);
    expect(testChopper.postion).toStrictEqual([1, 1]);
    moveHelicopter(testChopper, [23, 17], testMap);
    expect(testChopper.postion).toStrictEqual([1, 1]);
  });
});

/*Lander controls*/
describe("Test lander functions", () => {
  let testLander: Vehicle = {
    name: "testLander",
    postion: [1, 1],
    oritentation: "N",
    vicType: "Lander",
    tools: [],
  };
  test("Test move lander ", () => {
    expect(moveLander(testLander)).toBe("Unfortunately, landers cannot move");
    testLander.vicType = "Boat";
    expect(moveLander(testLander)).toBe(
      "Error: moveLander is only for landers"
    );
  });
  test("Use tools on lander", () => {});
});
