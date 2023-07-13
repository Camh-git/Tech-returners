export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  let smallNums = [];
  nums.forEach((number) => {
    if (number < 1) {
      smallNums.push(number);
    }
  });
  return smallNums;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  let matches = [];
  names.forEach((name) => {
    if (name[0] == char) {
      matches.push(name);
    }
  });
  return matches;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");

  // Nice one with the word tower, that was sneaky
  let verbs = [];
  words.forEach((element) => {
    if (element.startsWith("to ")) {
      verbs.push(element);
    }
  });
  return verbs;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  let ints = [];
  nums.forEach((number) => {
    if (Number.isInteger(number)) {
      ints.push(number);
    }
  });
  return ints;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");

  let cityCodes = [];
  users.forEach((person) => {
    cityCodes.push(person.data.city.displayName);
  });
  return cityCodes;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  // Split into 2 rows for readability
  let squareRoots = [];
  nums.forEach((number) => {
    let root = Math.sqrt(number).toFixed(2);
    squareRoots.push(Number(root));
  });
  return squareRoots;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  let matches = [];
  sentences.forEach((sentence) => {
    if (sentence.toUpperCase().includes(str.toUpperCase())) {
      matches.push(sentence);
    }
  });
  return matches;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  let longest = triangles.map((triangle) => {
    let currentLongest = 0;
    triangle.forEach((side) => {
      if (side > currentLongest) {
        currentLongest = side;
      }
    });
    return currentLongest;
  });
  return longest;
}
