import { Utils } from '../app/Utils';

describe('Utils test suite', () => {

  // Runs a function before each of the tests in this file runs. If the function returns a promise or is a generator, Jest waits for that promise to resolve before running the test.
  beforeEach(() => {
    console.log('before each');
  });

  // Runs a function before any of the tests in this file run. If the function returns a promise or is a generator, Jest waits for that promise to resolve before running tests.
  beforeAll(() => {
    console.log('before all');
  });


  test('first test', () => {
    const result = Utils.toUpperCase('abc');
    expect(result).toBe('ABC');
  })

  test('parse simple URL', () => {
    const parseUrl = Utils.parseUrl('http://localhost:8080/login');
    // toBe: compare primitive value
    expect(parseUrl.href).toBe('http://localhost:8080/login');
    expect(parseUrl.port).toBe('8080');
    expect(parseUrl.protocol).toBe('http:');
    // toEqual : compare object
    expect(parseUrl.query).toEqual({});
  });

  test('parse URL with query', () => {
    const parseUrl = Utils.parseUrl('http://localhost:8080/login?user=user&password=pass');
    const expectedQuery = {
      user: 'user',
      password: 'pass'
    }
    expect(parseUrl.query).toEqual(expectedQuery);
    expect(expectedQuery).toBe(expectedQuery);
  })

})