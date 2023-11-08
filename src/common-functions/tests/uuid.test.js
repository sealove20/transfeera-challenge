import { expect, test, describe } from 'vitest';
import { validateRandomKey } from '../functions/uuid';

describe('validate uuid', () => {
  test('Should be false if it is not the right length', () => {
    expect(validateRandomKey('123')).toBe(false);
    expect(validateRandomKey('31231312123')).toBe(false);
    expect(validateRandomKey()).toBe(false);
    expect(validateRandomKey('312313121233123131212331231312123')).toBe(false);
  });
  it("Should return true if it's a valid uuid", () => {
    expect(validateRandomKey('d259a498-839a-4b7e-b0b5-f393febd837d')).toBe(
      true,
    );
    expect(validateRandomKey('83c77ee2-5bea-46af-9b88-946707ad8d30')).toBe(
      true,
    );
    expect(validateRandomKey('3eb11193-e43e-4d06-96bb-2a69b8b11d63')).toBe(
      true,
    );
    expect(validateRandomKey('7a4a6024-ffe1-4915-ae9e-42894cd1fad1')).toBe(
      true,
    );
  });
  it("Should return false if it's an invalid cnpj", () => {
    expect(validateRandomKey('49f6ec70-6de8-42c99291-363e492a4230')).toBe(
      false,
    );
    expect(validateRandomKey('6da2a166928b-4095-8a08-2e1404c75806')).toBe(
      false,
    );
  });
});
