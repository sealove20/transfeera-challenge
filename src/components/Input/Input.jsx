import {
  InputWithSuffixContainer,
  Input as SInput,
  Suffix,
} from './Input.styles';

export const Input = () => {
  return <SInput placeholder="Nome, CPF, agência ou conta" />;
};

export const InputWithSuffix = ({ children }) => {
  return (
    <InputWithSuffixContainer>
      <Input />
      <Suffix>{children}</Suffix>
    </InputWithSuffixContainer>
  );
};
