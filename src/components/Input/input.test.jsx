import { fireEvent, render, screen } from '../../../tests/test-utils';
import { vi, expect } from 'vitest';
import { Input, InputWithSuffix, MaskedInput } from './Input';

describe('Input', () => {
  it('Should allow letters to be inputted', () => {
    render(<Input />);

    const input = screen.getByTestId('input');
    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: 'Nice' } });
    expect(input.value).toBe('Nice');
  });
  it('Check if suffix is on input', () => {
    render(
      <InputWithSuffix>
        <p>suffix</p>
      </InputWithSuffix>,
    );

    const inputSuffixChild = screen.getByText(/suffix/i);
    expect(inputSuffixChild).toBeTruthy();
  });
  it('Should show the right masked value', () => {
    const handleRegister = vi.fn();

    render(<MaskedInput mask={'999-999'} register={handleRegister} />);

    const maskedInput = screen.getByTestId('masked-input');
    expect(maskedInput.value).toBe('');

    fireEvent.change(maskedInput, { target: { value: '123321' } });
    expect(maskedInput.value).toBe('123-321');
  });
});
