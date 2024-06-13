import { describe, expect, test } from '@jest/globals';

describe('check auth validate', () => {
  test('check user email', () => {
    expect(emailValidate('test1234@gmail.com')).toBe(true);
    expect(emailValidate('test1234gmail.com')).toBe(false);
  });
});
