import styled from 'styled-components';

export const TableHeaderCell = styled.th`
  color: ${(props) => props.theme.colors.gray200};
  font-weight: ${(props) => props.theme.typography.fontWeight.bold};
`;
