// Instructions can be found in rest_parameters.md

export function add(...numbers) {
  //TODO: ask if there was a reason this exercise had a different way of being exported that the tests didnt like
  let total = 0;

  numbers.forEach((number) => {
    total += number;
  });

  return total;
}

console.log(add(1, 2));
console.log(add(1, 2, 3, 4, 5));

//module.exports = add;
