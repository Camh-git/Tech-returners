export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map((num) => num * num);
  /*
  let squares = [];
  nums.forEach((number) => {
    squares.push(number * number);
  });
  return squares;
  */
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  let sentence = words[0];
  //Not a foreach since this is simpler than doing a foreach and checking the index to skip the first word
  for (let i = 1; i < words.length; i++) {
    sentence += words[i][0].toUpperCase() + words[i].slice(1);
  }
  return sentence;
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  let totalSubjects = 0;
  people.forEach((person) => {
    totalSubjects += person.subjects.length;
  });
  return totalSubjects;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  for (const dish of menu) {
    if (dish.ingredients.includes(ingredient)) {
      return true;
    }
  }
  return false;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  let duplicates = [];
  arr1.forEach((number) => {
    if (arr2.includes(number) && !duplicates.includes(number)) {
      duplicates.push(number);
    }
  });
  return duplicates.sort();
}
