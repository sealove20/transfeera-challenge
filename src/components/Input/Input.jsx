import { forwardRef } from 'react';
import {
  InputWithSuffixContainer,
  Input as SInput,
  MaskedInput as SMaskedInput,
  Suffix,
} from './Input.styles';

export const Input = forwardRef(
  ({ $customCss, placeholderText, ...props }, ref) => {
    return (
      <SInput
        placeholder={placeholderText}
        $customCss={$customCss}
        ref={ref}
        {...props}
      />
    );
  },
);

export const InputWithSuffix = ({ children, placeholderText, ...props }) => {
  return (
    <InputWithSuffixContainer>
      <Input placeholderText={placeholderText} {...props} />
      <Suffix>{children}</Suffix>
    </InputWithSuffixContainer>
  );
};

export const MaskedInput = forwardRef(
  (
    {
      value = '',
      $customCss,
      onChange,
      formatterFunction,
      register,
      registerId,
      ...props
    },
    ref,
  ) => {
    return (
      <SMaskedInput
        {...props}
        {...register(registerId)}
        $customCss={$customCss}
      />
    );
  },
);
