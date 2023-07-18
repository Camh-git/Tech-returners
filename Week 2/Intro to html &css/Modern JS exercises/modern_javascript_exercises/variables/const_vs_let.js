// Instructions can be found in const_vs_let.md

function countThePeople() {
  let count = 0;
  const people = ["Barbara", "Jacob", "Angela", "Brangela"];
  people.forEach(() => (count += 1));
  return count;
}

console.log(countThePeople()); // <---- uncomment me!
