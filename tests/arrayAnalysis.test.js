import analyze from "../src/arrayAnalysis";

test("returns correct results", () => {
  const res_obj = analyze([1, 8, 3, 4, 2, 6]);

  expect(res_obj).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
