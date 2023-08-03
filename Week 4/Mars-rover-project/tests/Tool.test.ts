import { ToolKit, vicToolKits } from "../src/Types/Tool";

describe("Test that each tool does what it should", () => {
  test("Test functionality", () => {}),
    test("Test compatability", () => {
      expect(ToolKit[0].compatableVics).toStrictEqual([
        "Rover",
        "Lander",
        "Helicopter",
        "Plane",
        "Orbiter",
      ]);
    });
});
