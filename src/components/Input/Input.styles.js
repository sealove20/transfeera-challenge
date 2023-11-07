import styled, { css } from 'styled-components';
import InputMask from 'react-input-mask';

const inputBaseStyle = css`
  width: 100%;
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
`;

export const Input = styled.input`
  ${inputBaseStyle}

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

export const MaskedInput = styled(InputMask)`
  ${inputBaseStyle}
  ${(props) => props.$customCss}
`;
