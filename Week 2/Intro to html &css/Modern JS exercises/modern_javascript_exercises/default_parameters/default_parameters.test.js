import { sayHello } from "./default_parameters";

test("returns a greeting and the default name if no name is provided", () => {
  expect(sayHello()).toBe("Hello, you!");
});

test("returns a greeting and a name", () => {
  expect(sayHello("Laura")).toBe("Hello, Laura!");
});
