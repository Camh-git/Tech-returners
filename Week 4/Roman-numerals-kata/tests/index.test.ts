import { romanToArabic, arrabicToRoman } from "../src/translator";
import "jest";

describe("test translations from arabic to roman", () => {
  test("check that each of the main single chars converts", () => {
    expect(arrabicToRoman(1)).toBe("I");
    expect(arrabicToRoman(5)).toBe("V");
    expect(arrabicToRoman(10)).toBe("X");
    expect(arrabicToRoman(50)).toBe("L");
    expect(arrabicToRoman(100)).toBe("C");
    expect(arrabicToRoman(500)).toBe("D");
    expect(arrabicToRoman(1000)).toBe("M");
  });

  test("convert numbers that convert to more than 1 letter (without subtraction)", () => {
    expect(arrabicToRoman(3)).toBe("III");
    expect(arrabicToRoman(8)).toBe("VIII");
    expect(arrabicToRoman(53)).toBe("LIII");
    expect(arrabicToRoman(80)).toBe("LXXX");
    expect(arrabicToRoman(2023)).toBe("MMXXIII");
  });

  test("Convert numbers that result in orders that indicate subtraction (eg.9)", () => {
    expect(arrabicToRoman(4)).toBe("IV");
    expect(arrabicToRoman(9)).toBe("IX");
    expect(arrabicToRoman(90)).toBe("XC");
    expect(arrabicToRoman(999)).toBe("CMXCIX");
  });
});

describe("test translations from roman to arabic", () => {
  test("check that each of the main chars converts to the right number", () => {
    expect(romanToArabic("Nulla")).toBe(0);
    expect(romanToArabic("I")).toBe(1);
    expect(romanToArabic("V")).toBe(5);
    expect(romanToArabic("X")).toBe(10);
    expect(romanToArabic("L")).toBe(50);
    expect(romanToArabic("C")).toBe(100);
    expect(romanToArabic("D")).toBe(500);
    expect(romanToArabic("M")).toBe(1000);
  });

  test("convert mutliple char numbers to arabic", () => {
    expect(romanToArabic("III")).toBe(3);
    expect(romanToArabic("VIII")).toBe(8);
    expect(romanToArabic("LIII")).toBe(53);
    expect(romanToArabic("LXXX")).toBe(80);
    expect(romanToArabic("MMXXIII")).toBe(2023);
  });

  test("convert strings with subtractions", () => {
    expect(romanToArabic("IV")).toBe(4);
    expect(romanToArabic("IX")).toBe(9);
    expect(romanToArabic("XC")).toBe(90);
    expect(romanToArabic("CMXCIX")).toBe(999);
  });
});
describe("Test edge cases", () => {
  test("Arabic to roman edge cases", () => {
    //expect(arrabicToRoman(undefined)).toBe("Nulla"); //Just ran this as a sanity check for the first line of the function, it obviously doesn't accept undefined 😊
    expect(arrabicToRoman(0)).toBe("Nulla");
  });
  test("Roman to arabic edge cases", () => {
    expect(romanToArabic("Nulla")).toBe(0);
  });
});
