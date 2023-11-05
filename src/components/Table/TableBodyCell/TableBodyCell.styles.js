import styled from 'styled-components';

export const TableBodyCell = styled.td`
  color: ${(props) => props.theme.colors.gray100};
  font-weight: ${(props) => props.theme.typography.fontWeight.light};
  border-color: transparent;
  font-size: 14px;
  vertical-align: middle;
`;
