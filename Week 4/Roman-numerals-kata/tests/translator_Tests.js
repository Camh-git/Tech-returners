import { translator } from "./src//translator";

describe("test translations from arabic to roman", () => {
  test("check that number each of the main single chars", () => {
    expect(translator(1)).toBe("I");
    expect(translator(5)).toBe("V");
    expect(translator(10)).toBe("X");
    expect(translator(50)).toBe("L");
    expect(translator(100)).toBe("C");
    expect(translator(500)).toBe("D");
    expect(translator(1000)).toBe("M");
  });

  test("convert numbers that convert to more than 1 letter (without subtraction)", () => {
    expect(translator(3)).toBe("III");
    expect(translator(8)).toBe("VIII");
    expect(translator(80)).toBe("LXXX");
    expect(translator(2023)).toBe("MMXXIII");
  });

  test("Convert numbers that result in orders that indicate subtraction (eg.9)", () => {
    expect(translator(4)).toBe("IV");
    expect(translator(9)).toBe("IX");
    expect(translator(90)).toBe("XC");
  });
});
