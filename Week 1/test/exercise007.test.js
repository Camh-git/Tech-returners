import {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
} from "../challenges/exercise007-optional";

describe("sumDigits", () => {
  test("Sum up some simple, valid numbers", () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(9844)).toBe(25);
  });
  test("return 0 when supplied with bad values", () => {
    expect(sumDigits("a1")).toBe(0);
    expect(sumDigits(5 - 7)).toBe(0);
  });
});

describe("createRange", () => {});
test("return a valid array with the defaul step", () => {
  expect(createRange(3, 11)).toEqual([3, 4, 5, 6, 7, 8, 9, 10, 11]);
  expect(createRange(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(createRange(32, 37)).toEqual([32, 33, 34, 35, 36, 37]);
});
test("return a valid array with a custom step", () => {
  expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
  expect(createRange(1, 16, 5)).toEqual([1, 6, 11, 16]);
});

describe("getScreentimeAlertList", () => {});
const usage = [
  {
    username: "beth_1234",
    name: "Beth Smith",
    screenTime: [
      {
        date: "2019-05-01",
        usage: { twitter: 34, instagram: 22, facebook: 40 },
      },
      {
        date: "2019-05-02",
        usage: { twitter: 56, instagram: 40, facebook: 31 },
      },
      {
        date: "2019-05-03",
        usage: { twitter: 12, instagram: 15, facebook: 19 },
      },
      {
        date: "2019-05-04",
        usage: { twitter: 10, instagram: 56, facebook: 61 },
      },
    ],
  },
  {
    username: "sam_j_1989",
    name: "Sam Jones",
    screenTime: [
      {
        date: "2019-06-11",
        usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 },
      },
      {
        date: "2019-06-13",
        usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
      },
      {
        date: "2019-06-14",
        usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
      },
      {
        date: "2019-06-15",
        usage: { mapMyRun: 30, whatsApp: 50, facebook: 75, safari: 10 },
      },
    ],
  },
  {
    username: "John_S_123",
    name: "John smith",
    screenTime: [
      {
        date: "2019-06-11",
        usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 },
      },
      {
        date: "2019-06-15",
        usage: { mapMyRun: 35, whatsApp: 50, facebook: 60, safari: 16 },
      },
    ],
  },
];
test("expect returns of users who had over 100 minutes of screentime on the given day", () => {
  expect(getScreentimeAlertList(usage, "2019-05-04")).toEqual(["beth_1234"]);
  expect(getScreentimeAlertList(usage, "2019-06-15")).toEqual([
    "sam_j_1989",
    "John_S_123",
  ]);
});
describe("hexToRGB", () => {
  test("Check for the correct RGB codes", () => {
    expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
    expect(hexToRGB("#533356")).toBe("rgb(83,51,86)");
  });
});

describe("findWinner", () => {
  test("Check if correct winner is declared", () => {
    expect(
      findWinner(["X", "0", null], ["X", null, "0"], ["X", null, "0"])
    ).toBe("X");
    expect(
      findWinner(["X", "0", "0"], ["X", null, "0"], ["X", null, "0"])
    ).toBe("0");
  });
  test("Check if null is returned when there is no winner", () => {
    ["X", "0", null], ["X", null, "0"], [null, null, "0"];
  }).toBe(null);
});
