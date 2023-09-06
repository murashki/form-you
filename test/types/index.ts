Test: {
  type A = null;

  // @ts-expect-error
  const a: A = undefined;

  expect(a).toBe(null);
}
