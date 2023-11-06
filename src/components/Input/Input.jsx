import {
  InputWithSuffixContainer,
  Input as SInput,
  Suffix,
} from './Input.styles';

export const Input = ({ $customCss }) => {
  return (
    <SInput placeholder="Nome, CPF, agência ou conta" $customCss={$customCss} />
  );
};

export const InputWithSuffix = ({ children }) => {
  return (
    <InputWithSuffixContainer>
      <Input />
      <Suffix>{children}</Suffix>
    </InputWithSuffixContainer>
  );
};
