import { expect, test, describe } from 'vitest';

import { maskCpf, validateCPF } from '../functions/cpf';

describe('Validate cpf tests', () => {
  test("Should return false if a CPF isn't passed", () => {
    expect(validateCPF()).toBe(false);
  });

  test('Should return true if a CPF is valid', () => {
    expect(validateCPF('723.401.510-82')).toBe(true);
  });

  test('Should return false if a CPF is invalid', () => {
    expect(validateCPF('111.111.111-11')).toBe(false);
  });
});

describe('Mask CPF', () => {
  it("Don't break", () => {
    expect(maskCpf()).toEqual('___.___.___-__');
  });

  it('Should return partial readable Cpf when passed six numbers', () => {
    expect(maskCpf('337714')).toEqual('___.__3.377-14');
  });

  it('Should only accept numbers', () => {
    expect(maskCpf('aaaaaaaa')).toEqual('___.___.___-__');
  });
});
