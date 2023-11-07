import { TableBodyCell as STableBodyCell } from './TableBodyCell.styles';

export const TableBodyCell = ({ children, $customCss, ...props }) => {
  return (
    <STableBodyCell $customCss={$customCss} {...props}>
      {children}
    </STableBodyCell>
  );
};
