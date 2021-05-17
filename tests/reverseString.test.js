import reverseString from "../src/reverseString";

test("reverses string", () => {
  expect(reverseString("hey there!")).toBe("!ereht yeh");
});
