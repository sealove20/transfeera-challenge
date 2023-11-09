import { expect, test, describe } from 'vitest';
import {
  addDashBeforeLast,
  removeSpecialCharactersFromString,
} from '../functions/string';

describe('Format string', () => {
  test('should return a string with a dash symbol before last character of the string', () => {
    expect(addDashBeforeLast('12345')).toBe('1234-5');
    expect(addDashBeforeLast('AbacateT')).toBe('Abacate-T');
  });
  test('Should return a string with all special characters and spaces removed', () => {
    expect(removeSpecialCharactersFromString('(66) 9 8133-5827')).toBe(
      '66981335827',
    );
    expect(removeSpecialCharactersFromString('00.602.013/0001-30')).toBe(
      '00602013000130',
    );
    expect(removeSpecialCharactersFromString('724.645.960-00')).toBe(
      '72464596000',
    );
  });
});
