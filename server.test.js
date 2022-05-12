/* eslint-disable no-undef */
const request = require('supertest');

const baseURL = 'https://get-every-third-server.herokuapp.com';

describe('POST /test', () => {
  it('should return 200 and work', async () => {
    const response = await request(baseURL)
      .post('/test')
      .send({ string_to_cut: 'iamyourlyftdriver' });
    expect(response.statusCode).toBe(200);
    expect(response.text).toMatch('{"return_string":"muydv"}');
  });
});

describe('works with a long string', () => {
  it('should return 200 and be a string with (length*1000)/3-20', async () => {
    const testString = 'abc';
    const reallyLongString = testString.repeat(1000);
    const response = await request(baseURL)
      .post('/test')
      .set('Content-Type', 'application/json')
      .send({ string_to_cut: reallyLongString });
    expect(response.statusCode).toBe(200);
    expect(typeof response.text).toBe('string');
    expect(response.text.length).toEqual(1020);
  });
});

describe('request not a string', () => {
  it('should return 400 and error message', async () => {
    const response = await request(baseURL)
      .post('/test')
      .set('Content-Type', 'application/json')
      .send({ string_to_cut: 12345 });
    expect(response.statusCode).toBe(400);
    expect(response.text).toMatch('{"error":"Check string and try again"}');
  });
});

describe('request too short', () => {
  it('should return 400 and error message', async () => {
    const response = await request(baseURL)
      .post('/test')
      .set('Content-Type', 'application/json')
      .send({ string_to_cut: 'ab' });
    expect(response.statusCode).toBe(400);
    expect(response.text).toMatch(
      '{"error":"Initial string must be at least 3 characters"}',
    );
  });
});

describe('request empty', () => {
  it('should return 400 and error message', async () => {
    const response = await request(baseURL)
      .post('/test')
      .set('Content-Type', 'application/json')
      .send({});
    expect(response.statusCode).toBe(400);
    expect(response.text).toMatch(
      '{"error":"Cannot read properties of undefined (reading \'length\')"}',
    );
  });
});

describe('request is null', () => {
  it('should return 400 and error message', async () => {
    const response = await request(baseURL)
      .post('/test')
      .set('Content-Type', 'application/json')
      .send({ string_to_cut: null });
    expect(response.statusCode).toBe(400);
    expect(response.text).toMatch(
      '{"error":"Cannot read properties of null (reading \'length\')"}',
    );
  });
});

describe('request is undefined', () => {
  it('should return 400 and error message', async () => {
    const response = await request(baseURL)
      .post('/test')
      .set('Content-Type', 'application/json')
      .send({ string_to_cut: undefined });
    expect(response.statusCode).toBe(400);
    expect(response.text).toMatch(
      '{"error":"Cannot read properties of undefined (reading \'length\')"}',
    );
  });
});
