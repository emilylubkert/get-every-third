const getEveryThird = require('./testRoute')

test('Sanity check', () => {
  expect(true).toBe(true);
});

test('gets every 3rd string', async () => {
  expect(await getEveryThird('iamyourlyftdriver')).toBe("muydv");
});

