import { expect, test, describe } from 'vitest';
import { validatePhone } from '../functions/phone';

describe('validate phone', () => {
  test('Should return false for nothing', () => {
    expect(validatePhone()).toBe(false);
  });

  test('Should accept formatted phone', () => {
    expect(validatePhone('(11) 95555-1234')).toBe(true);
  });

  test('Should accept unformatted phone', () => {
    expect(validatePhone('11955551234')).toBe(true);
  });

  test('Should accept mobile phone', () => {
    expect(validatePhone('(49) 99195-5656')).toBe(true);
  });

  test('Should return false for things that are not phone', () => {
    expect(validatePhone('relevanttest')).toBe(false);
    expect(validatePhone('otherridicoloustest')).toBe(false);
  });

  test('Should format string whose numbers alone are 11 digit', () => {
    expect(validatePhone('a1s2d345678901')).toBe(false);
  });
});
