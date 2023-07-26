export function arrabicToRoman(input: number) {
  if (!input) return "Nulla";

  //create an array of the individual chars in input and their postions
  let digits: Array<number> = Array.from(input.toString()).map((entry) => {
    return parseInt(entry);
  });
  digits = digits.reverse();

  //go through the digits, getting the correct conversion for each digit in each postion
  let output: Array<string> = [];
  for (let i = 0; i < digits.length; i++) {
    //it seems to be pulling the value from CONVERSIONS.thousands regardless of the value of i
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
    }
  }

  return output.toString();
}
export function romanToArabic(input: string): number {
  if (input == "Nulla") return 0;

  let output: number = 0;
  return output;
}

const CONVERSIONS = {
  ones: ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
  tens: ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
  hundreds: ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
  thousands: ["", "M", "MM", "MMM", "MV̅", "V̅", "V̅M", "V̅MM", "V̅MMM", "MX̅", "X̅"],
};
