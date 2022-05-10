const getEveryThird = require('./testRoute')


// const fetchMock = jest
// .spyOn(global, 'fetch')
// .mockImplementation(() => {
//   Promise.resolve({ json: () => Promise.resolve('') })
// })

// describe('getEveryThird', () => {
  //   test('works', async () => {
  //     const response = await getEveryThird("thisString")
  //     expect(fetchMock).toHaveBeenCalledWith(
  //       "http://localhost:8080/test"
  //     )
  //     expect(String.isString(response)).toEqual(true)
  //     expect(response.length).toEqual(0)
  
  //   })
  // })

test('Sanity check', () => {
  expect(true).toBe(true);
});

const unmockedFetch = global.fetch

beforeAll(() => {
  global.fetch = () => Promise.resolve({json: () => Promise.resolve("")})
})

afterAll(() => {
  global.fetch = unmockedFetch
})

describe('getEveryThird', () => {
  test('works', async () => {
    const response = await getEveryThird("randomString")
    expect(typeof response).toBe("string")
    expect(response.length).toEqual(4)
  })
})


// test('gets every 3rd string', async () => {
//   expect(await getEveryThird('iamyourlyftdriver')).toBe({return_string:"muydv"});
// });

