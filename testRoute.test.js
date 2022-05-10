const getEveryThird = require('./testRoute')

//test cases
//getEveryThird("string")returns every third character for string.length > 2 - pass
//getEveryThird("string")returns error for string.length <= 2 - pass
test('Sanity check', () => {
  expect(true).toBe(true);
});

test('gets every 3rd string', async () => {
  expect(await getEveryThird('iamyourlyftdriver')).toBe("muydv");
});

