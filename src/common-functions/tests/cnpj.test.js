import { expect, test, describe } from 'vitest';
import { maskCnpj, validateCNPJ } from '../functions/cnpj';

describe('validate cnpj', () => {
  test("Should be false if it's not the right length", () => {
    expect(validateCNPJ('123')).toBe(false);
    expect(validateCNPJ('123456')).toBe(false);
    expect(validateCNPJ()).toBe(false);
    expect(validateCNPJ('7897987987546541231564654')).toBe(false);
  });

  test("Should return false if it's all equal numbers", () => {
    expect(validateCNPJ('99.999.999/9999-99')).toBe(false);
    expect(validateCNPJ('99999999999999')).toBe(false);
    expect(validateCNPJ('55.555.555/5555-55')).toBe(false);
    expect(validateCNPJ('55555555555555')).toBe(false);
  });

  test("Should return true if it's a valid cnpj", () => {
    expect(validateCNPJ('99.171.084/0001-93')).toBe(true);
    expect(validateCNPJ('60.784.250/0001-91')).toBe(true);
    expect(validateCNPJ('60784250000191')).toBe(true);
    expect(validateCNPJ('95.480.289/0001-08')).toBe(true);
  });

  test("Should return false if it's an invalid cnpj", () => {
    expect(validateCNPJ('60.784.250/0341-91')).toBe(false);
    expect(validateCNPJ('60784250000196')).toBe(false);
  });
});

describe('mask cnpj', () => {
  it("Don't break", () => {
    expect(maskCnpj()).toEqual('__.___.___/____-__');
  });

  it('Should return partial readable CNPJ when passed six numbers', () => {
    expect(maskCnpj('337714')).toEqual('__.___.___/3377-14');
  });

  it('Should return readable CNPJ when passed a correct numbers', () => {
    expect(maskCnpj('33771486000011')).toEqual('33.771.486/0000-11');
  });
  it('Should only accept numbers', () => {
    expect(maskCnpj('aaaaaaaa')).toEqual('__.___.___/____-__');
  });
});
