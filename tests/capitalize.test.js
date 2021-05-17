import capitalize from "../src/capitalize";

test("capitalizes string", () => {
  expect(capitalize("the pizza is ready!")).toBe("The pizza is ready!");
});
