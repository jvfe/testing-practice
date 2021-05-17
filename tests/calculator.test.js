import { add, sub, div, mult } from "../src/calculator";

test("adds numbers", () => {
  expect(add(1, 3, 4)).toEqual(8);
});

test("subtracts numbers", () => {
  expect(sub(8, 3, 2)).toEqual(3);
});

test("divides numbers", () => {
  expect(div(9, 3)).toEqual(3);
});

test("multiples numbers", () => {
  expect(mult(4, 2, 2)).toEqual(16);
});
