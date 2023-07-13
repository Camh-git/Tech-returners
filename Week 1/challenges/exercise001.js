// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word[0].toUpperCase() + word.slice(1);
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  //return firstName[0].toUpperCase() + "." + lastName[0].toUpperCase();
  return `${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}`;
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");

  const VATDUE = (originalPrice * vatRate) / 100;
  return Number((originalPrice + VATDUE).toFixed(2));
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  let discount = (originalPrice / 100) * reduction;
  return Number((originalPrice - discount).toFixed(2));
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  if (str.length % 2 == 0) {
    return (
      str[Math.floor(str.length / 2) - 1] + str[Math.floor(str.length / 2)]
    );
  }
  return str[Math.floor(str.length / 2)];
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
  /*
  let newWord = "";
  let i = word.length - 1;
  while (i >= 0) {
    newWord += word[i];
    i -= 1;
  }
  return newWord;
  */
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  //maps the value of using reverseword on each entry in the words array
  return words.map((word) => reverseWord(word));
  /*
  let newWordList = [];
  //Loop through the list of words and call reverse word on each of them
  for (let i = 0; i < words.length; i++) {
    newWordList.push(reverseWord(words[i]));
  }
  return newWordList;
  */
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");

  let userCount = 0;
  users.forEach((user) => {
    if (user.type == "Linux") {
      userCount++;
    }
  });
  return userCount;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");

  let total = 0;
  scores.forEach((score) => {
    total += score;
  });
  return Number((total / scores.length).toFixed(2));
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");

  if (n % 5 === 0 && n % 3 === 0) {
    return "fizzbuzz";
  } else if (n % 3 === 0) {
    return "fizz";
  } else if (n % 5 === 0) {
    return "buzz";
  } else {
    return n;
  }
}
