import { introduction } from "./destructuring_objects";

test("returns a greeting and a name", () => {
  const person = {
    name: "Simon",
    city: "Blackpool",
    pet: "Rudie",
  };

  expect(introduction(person)).toBe(
    "Hello my name is Simon and I live in Blackpool with Rudie"
  );
});
