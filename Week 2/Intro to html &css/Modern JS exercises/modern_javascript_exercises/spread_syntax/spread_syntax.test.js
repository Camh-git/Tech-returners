import { allTheNumbers } from "./spread_syntax";

test("it returns an array of all the numbers", () => {
  const numbers = [1, 2, 3];
  const moreNumbers = [4, 5, 6];
  expect(allTheNumbers(numbers, moreNumbers)).toStrictEqual([1, 2, 3, 4, 5, 6]);
});
