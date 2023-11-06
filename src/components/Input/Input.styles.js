import styled from 'styled-components';

export const Input = styled.input`
  width: 254px;
  height: 31px;
  background-color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.typography.fontSize.small};
  border-radius: ${(props) => props.theme.sizes.borderRadius.regular};
  border: 2px solid ${(props) => props.theme.colors.gray700};
  padding: 5px;
  color: ${(props) => props.theme.colors.gray500};

  &::placeholder {
    color: ${(props) => props.theme.colors.gray300};
    font-size: ${(props) => props.theme.typography.fontSize.small};
  }

  ${(props) => props.$customCss}
`;

export const InputWithSuffixContainer = styled.div`
  position: relative;
`;

export const Suffix = styled.div`
  position: absolute;
  top: 8px;
  right: 10px;
`;
