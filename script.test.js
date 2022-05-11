/**
 * @jest-environment jsdom
 */

const getEveryThird = require('./script');

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () => Promise.resolve({ json: () => Promise.resolve("muydv") });
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

test('is called', async () => {
  document.body.innerHTML = 
  '<div id="response">' +
  '  <h2 />' +
  '</div>';
  const response = await getEveryThird("iamyourlyftdriver");
  expect(response).toBeDefined();
});

test('works', async () => {
  document.body.innerHTML = 
  '<div id="response">' +
  '  <h2 />' +
  '</div>';
  const response = await getEveryThird("iamyourlyftdriver");
  expect(typeof response).toBe("string")
});

