import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} from "../challenges/exercise006";

describe("sumMultiples", () => {
  test("Sums a group of only valid numbers", () => {
    expect(sumMultiples([3, 5])).toBe(8);
    expect(sumMultiples([3, 5, 6, 9, 10])).toBe(33);
    expect(sumMultiples([15, 20, 30, 33])).toBe(98);
  });
  test("Returns 0 when only invalid numbers are sent", () => {
    expect(sumMultiples([1, 2])).toBe(0);
    expect(sumMultiples([4, 8, 11])).toBe(0);
  });
  test("Returns the correct value from a mixed group of correct and incorrect numbers", () => {
    expect(sumMultiples([1, 2, 3, 4, 5, 6])).toBe(14);
    expect(sumMultiples([9, 13, 15, 16, 37])).toBe(24);
  });
});

describe("isValidDNA", () => {
  test("Returns true with a valid string", () => {
    expect(isValidDNA("CGTA")).toBe(true);
    expect(isValidDNA("CA")).toBe(true);
    expect(isValidDNA("CG")).toBe(true);
    expect(isValidDNA("TA")).toBe(true);
    expect(isValidDNA("A")).toBe(true);
  });
  test("Returns false with an invalid string", () => {
    expect(isValidDNA("BDEF")).toBe(false);
    expect(isValidDNA("XYZ")).toBe(false);
  });
  test("Returns false with an invalid string with some valid chars", () => {
    expect(isValidDNA("ABCD")).toBe(false);
    expect(isValidDNA("EFGH")).toBe(false);
    expect(isValidDNA("RSTU")).toBe(false);
  });
  test("Check if the input is case insensitive", () => {
    expect(isValidDNA("cgta")).toBe(true);
    expect(isValidDNA("cg")).toBe(true);
    expect(isValidDNA("abcd")).toBe(false);
  });
});

describe("getComplementaryDNA", () => {
  test("Returns a valid complementary string when a valid string is provided", () => {
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    expect(getComplementaryDNA("CGTA")).toBe("GCAT");
  });
});

describe("isItPrime", () => {
  test("Returns true on primes", () => {
    expect(isItPrime(5)).toBe(true);
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(13)).toBe(true);
  });
  test("Returns false on non-primes", () => {
    expect(isItPrime(4)).toBe(false);
    expect(isItPrime(9)).toBe(false);
    expect(isItPrime(12)).toBe(false);
  });
});

describe("createMatrix", () => {
  test("", () => {
    expect(createMatrix(3, "foo")).toEqual([
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
    ]);
    expect(createMatrix(1, "Hello")).toEqual([["Hello"]]);
  });
});

describe("areWeCovered", () => {
  test("", () => {
    const staff = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "John", rota: ["Monday", "Tuesday", "Wednesday"] },
      { name: "Jane", rota: ["Monday", "Wednesday", "Friday", "Saturday"] },
      { name: "Bob", rota: ["Saturday", "Sunday"] },
    ];
    expect(areWeCovered(staff, "Monday")).toBe(true);
    expect(areWeCovered(staff, "Tuesday")).toBe(true);
    expect(areWeCovered(staff, "Wednesday")).toBe(true);
    expect(areWeCovered(staff, "Thursday")).toBe(false);
    expect(areWeCovered(staff, "Friday")).toBe(false);
    expect(areWeCovered(staff, "Saturday")).toBe(true);
    expect(areWeCovered(staff, "Sunday")).toBe(false);
  });
});
