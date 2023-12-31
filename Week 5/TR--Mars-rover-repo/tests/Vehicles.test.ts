import {
  Vehicle,
  moveHelicopter,
  moveLander,
  movePlane,
  moveRover,
  rotate,
  moveOrbiter,
} from "../src/Types/Vehicles";
import { Grid, CoOrdinate } from "../src/Types/Map";

/*Declaring a test map for all the movement tests to share(they where using the same one so DRY  😊 ) */
const testMap: Grid = { XMax: 5, YMax: 5, blockedTiles: [[4, 4]] };
/*Rover movement controls */
describe("test rover rotation", () => {
  let testRover: Vehicle = {
    name: "testRover",
    position: [5, 5],
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

describe("Rover deployment test", () => {
  test("Make sure we can deploy rovers at any (legal) postion", () => {
    let TestRover1: Vehicle = {
      name: "TestRover1",
      position: [5, 5],
      oritentation: "N",
      vicType: "Rover",
      tools: [],
    };
    let TestRover2: Vehicle = {
      name: "TestRover2",
      position: [3, 3],
      oritentation: "N",
      vicType: "Rover",
      tools: [],
    };
    let TestRover3: Vehicle = {
      name: "TestRover3",
      position: [1, 1],
      oritentation: "N",
      vicType: "Rover",
      tools: [],
    };
    let TestRover4: Vehicle = {
      name: "TestRover4",
      position: [2, 3],
      oritentation: "N",
      vicType: "Rover",
      tools: [],
    };
    let TestRover5: Vehicle = {
      name: "TestRover5",
      position: [5, 4],
      oritentation: "N",
      vicType: "Rover",
      tools: [],
    };
    expect(TestRover1.position).toStrictEqual([5, 5]);
    expect(TestRover2.position).toStrictEqual([3, 3]);
    expect(TestRover3.position).toStrictEqual([1, 1]);
    expect(TestRover4.position).toStrictEqual([2, 3]);
    expect(TestRover5.position).toStrictEqual([5, 4]);
  });
});

describe("Test rover movement", () => {
  let testRover: Vehicle = {
    name: "testRover",
    position: [1, 1],
    oritentation: "N",
    vicType: "Rover",
    tools: [],
  };
  test("Test basic movement in various orientations", () => {
    testRover.oritentation = "N";
    moveRover(testRover, testMap);
    expect(testRover.position).toStrictEqual([2, 1]);

    testRover.oritentation = "E";
    moveRover(testRover, testMap);
    expect(testRover.position).toStrictEqual([2, 2]);

    testRover.oritentation = "S";
    moveRover(testRover, testMap);
    expect(testRover.position).toStrictEqual([1, 2]);

    testRover.oritentation = "W";
    moveRover(testRover, testMap);
    expect(testRover.position).toStrictEqual([1, 1]);
  });

  test("Test rover movement with command strings", () => {});
  test("Test rover movement in edge cases", () => {
    //Won't move wrong vic type
    testRover.vicType = "Lander";
    moveRover(testRover, testMap);
    expect(testRover.position).toStrictEqual([1, 1]);
    //Won't go off top of map
    testRover.vicType = "Rover";
    testRover.position = [5, 5];
    testRover.oritentation = "N";
    moveRover(testRover, testMap);
    expect(testRover.position).toStrictEqual([5, 5]);
    //Won't go off bottom of map
    testRover.position = [0, 0];
    testRover.oritentation = "S";
    moveRover(testRover, testMap);
    expect(testRover.position).toStrictEqual([0, 0]);
    //Doesn't move onto forbidden square //Will add when adding extra map features
  });
});

/*Helicopter controls*/
describe("Test helicopter movement", () => {
  let testChopper: Vehicle = {
    name: "testChopper",
    position: [1, 1],
    oritentation: "N",
    vicType: "Helicopter",
    tools: [],
  };
  test("Test flying in a loop", () => {
    moveHelicopter(testChopper, [2, 1], testMap);
    expect(testChopper.position).toStrictEqual([2, 1]);
    moveHelicopter(testChopper, [2, 2], testMap);
    expect(testChopper.position).toStrictEqual([2, 2]);
    moveHelicopter(testChopper, [1, 2], testMap);
    expect(testChopper.position).toStrictEqual([1, 2]);
    moveHelicopter(testChopper, [1, 1], testMap);
    expect(testChopper.position).toStrictEqual([1, 1]);
  });
  test("Test flying to random positions", () => {
    moveHelicopter(testChopper, [3, 3], testMap);
    expect(testChopper.position).toStrictEqual([3, 3]);
    moveHelicopter(testChopper, [2, 4], testMap);
    expect(testChopper.position).toStrictEqual([2, 4]);
    moveHelicopter(testChopper, [3, 1], testMap);
    expect(testChopper.position).toStrictEqual([3, 1]);
  });
  test("Test helicopter movement in edge cases", () => {
    testChopper.position = [1, 1];
    moveHelicopter(testChopper, [-1, -1], testMap);
    expect(testChopper.position).toStrictEqual([1, 1]);
    moveHelicopter(testChopper, [23, 17], testMap);
    expect(testChopper.position).toStrictEqual([1, 1]);
    testChopper.vicType = "Lander";
    moveHelicopter(testChopper, [3, 3], testMap);
    expect(testChopper.position).toStrictEqual([1, 1]);
  });
});

/*Plane controls*/
describe("Test plane movement", () => {
  let testPlane: Vehicle = {
    name: "testPlane",
    position: [1, 1],
    oritentation: "N",
    vicType: "Plane",
    tools: [],
  };
  test("Fly to random acceptible postions", () => {});
  movePlane(testPlane, [3, 3], testMap);
  expect(testPlane.position).toStrictEqual([3, 3]);
  movePlane(testPlane, [4, 3], testMap);
  expect(testPlane.position).toStrictEqual([4, 3]);
  movePlane(testPlane, [1, 2], testMap);
  expect(testPlane.position).toStrictEqual([1, 2]);
  test("Try and fly to bad positions", () => {});
  testPlane.position = [1, 1];
  movePlane(testPlane, [-3, 3], testMap);
  expect(testPlane.position).toStrictEqual([1, 1]);
  movePlane(testPlane, [45, 23], testMap);
  expect(testPlane.position).toStrictEqual([1, 1]);

  test("Check movement edge cases", () => {
    testPlane.vicType = "Lander";
    testPlane.position = [1, 1];
  });
});

/*Lander controls*/
describe("Test lander functions", () => {
  let testLander: Vehicle = {
    name: "testLander",
    position: [1, 1],
    oritentation: "N",
    vicType: "Lander",
    tools: [],
  };
  test("Test move lander ", () => {
    expect(moveLander(testLander)).toBe("Unfortunately, landers cannot move");
    testLander.vicType = "Rover";
    expect(moveLander(testLander)).toBe(
      "Error: moveLander is only for landers"
    );
  });
  test("Use tools on lander", () => {});
});
/* Orbiter controls */
describe("Test the orbiter's functions", () => {
  let testOrbiter: Vehicle = {
    name: "testOrbiter",
    position: [1, 1],
    oritentation: "N",
    vicType: "Orbiter",
    tools: [],
  };
  test("Move orbiter sensibly", () => {
    moveOrbiter(testOrbiter, [2, 1], testMap);
    expect(testOrbiter.position).toStrictEqual([2, 1]);
    moveOrbiter(testOrbiter, [5, 1], testMap);
    expect(testOrbiter.position).toStrictEqual([5, 1]);
  });
  test("Try moving orbiter on Y axis", () => {
    testOrbiter.position = [1, 1];
    moveOrbiter(testOrbiter, [1, 2], testMap);
    expect(testOrbiter.position).toStrictEqual([1, 1]);
    moveOrbiter(testOrbiter, [1, 5], testMap);
    expect(testOrbiter.position).toStrictEqual([1, 1]);
  });
  test("Test edge cases", () => {
    testOrbiter.position = [1, 1];
    //Out of bounds
    moveOrbiter(testOrbiter, [-1, -1], testMap);
    expect(testOrbiter.position).toStrictEqual([1, 1]);
    moveOrbiter(testOrbiter, [37, 24], testMap);
    expect(testOrbiter.position).toStrictEqual([1, 1]);
    //bad vic type
    testOrbiter.vicType = "Lander";
    moveOrbiter(testOrbiter, [3, 3], testMap);
    expect(testOrbiter.position).toStrictEqual([1, 1]);
  });
});
