const sum = (a, b) => {
  return a + b;
};

test("sum of two numbers", () => {
  expect(sum(2, 5)).toBe(7);
});
