import styled from 'styled-components';

export const Checkbox = styled.input`
  appearance: auto;
  border: 1px solid ${(props) => props.theme.colors.gray800};

  &:checked {
    accent-color: ${(props) => props.theme.colors.green200};
  }
`;
