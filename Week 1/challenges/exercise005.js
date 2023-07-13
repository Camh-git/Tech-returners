export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  if (!nums.includes(n) || nums.indexOf(n) == nums.length - 1) {
    return null;
  }
  return nums[nums.indexOf(n) + 1];
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");

  return {
    1: str.replaceAll("0", "").length,
    0: str.replaceAll("1", "").length,
  };
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");

  return Number(n.toString().split("").reverse().join(""));
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");

  let total = 0;
  arrs.map((array) => {
    array.forEach((num) => {
      total += num;
    });
    return array;
  });
  return total;
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");

  //TODO: see if there is a more clever way to do this
  let placeHolder = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = placeHolder;
  return arr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  for (const entry of Object.entries(haystack)) {
    if (
      entry[1]
        .toString()
        .toUpperCase()
        .includes(searchTerm.toString().toUpperCase())
    ) {
      return true;
    }
  }
  return false;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");

  // I split the text processing from the loop for readability
  let wordList = {};
  str = str
    .replace(/[^a-zA-Z ]/g, "")
    .toLowerCase()
    .split(" ");
  str.forEach((word) => {
    if (wordList[word] === undefined) {
      wordList[word] = 1;
    } else {
      wordList[word] += 1;
    }
  });
  return wordList;
};
