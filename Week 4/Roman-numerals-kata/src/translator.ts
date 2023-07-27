export function arrabicToRoman(input: number) {
  if (!input || input < 0) return "Nulla";

  //create an array of the individual chars in input and their postions
  let digits: Array<number> = Array.from(input.toString()).map((entry) => {
    return parseInt(entry);
  });
  digits = digits.reverse();

  //go through the digits, getting the correct conversion for each digit in each postion
  //TODO: try and find a less verbose way to do this (maybe itterate through digits/the conversion table and use index)
  let output: Array<string> = [];
  for (let i = 0; i < digits.length; i++) {
    switch (i) {
      case 0:
        output.push(CONVERSIONS.ones[digits[i]]);
        break;
      case 1:
        output.push(CONVERSIONS.tens[digits[i]]);
        break;
      case 2:
        output.push(CONVERSIONS.hundreds[digits[i]]);
        break;
      case 3:
        output.push(CONVERSIONS.thousands[digits[i]]);
        break;
      case 4:
        output.push(CONVERSIONS.tenThousands[digits[i]]);
        break;
      case 5:
        output.push(CONVERSIONS.hundredThousands[digits[i]]);
        break;
    }
  }
  return output.reverse().toString().replaceAll(",", "");
}
export function romanToArabic(input: string): number {
  if (input == "Nulla" || input.includes("-")) return 0;
  //figure out how to split this up (good luck)

  //convert using table as above

  let output: number = 0;
  return output;
}

const CONVERSIONS = {
  ones: ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
  tens: ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
  hundreds: ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
  thousands: ["", "M", "MM", "MMM", "MV̅", "V̅", "V̅M", "V̅MM", "V̅MMM", "I̅X̅"],
  tenThousands: ["", "X̅", "X̅X̅", "X̅X̅X̅", "X̅L̅", "L̅", "X̅L̅", "X̅L̅L̅", "X̅L̅L̅L̅", "X̅C̅"],
  hundredThousands: [
    "",
    "C̅",
    "C̅C̅",
    "C̅C̅C̅",
    "C̅D̅",
    "D̅",
    "D̅C̅",
    "D̅C̅C̅",
    "D̅C̅C̅C̅",
    "C̅M̅",
  ],
};
