export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
  /*
  let ingredients = [];
  sandwich.fillings.forEach((food) => {
    ingredients.push(food);
  }); 
  return ingredients;
  */
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city === "Manchester";
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  const BUS_CAPACITY = 40;
  return Math.ceil(people / BUS_CAPACITY);
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  let count = 0;
  arr.forEach((animal) => {
    if (animal === "sheep") {
      count++;
    }
  });
  return count;
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");

  return (
    person.address.postCode[0] === "M" && person.address.city === "Manchester"
  );
}
