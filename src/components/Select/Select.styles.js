import styled from 'styled-components';

export const Select = styled.select`
  border: 2px solid ${(props) => props.theme.colors.gray700};
  width: 350px;
  padding: 5px;
  color: ${(props) => props.theme.colors.gray500};
  font-size: ${(props) => props.theme.typography.fontSize.small};
  appearance: auto;
  -webkit-appearance: auto;
  -moz-appearance: auto;

  ${(props) => props.$customCss}
`;
