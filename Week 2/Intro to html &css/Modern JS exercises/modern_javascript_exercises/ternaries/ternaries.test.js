import { sayHello } from "./ternaries";

test('defining name as "Jimmy" returns "Hello, Jimmy!"', () => {
  expect(sayHello("Jimmy")).toBe("Hello, Jimmy!");
});
test('no arguments passed returns "Hello you!"', () => {
  expect(sayHello()).toBe("Hello you!");
});
