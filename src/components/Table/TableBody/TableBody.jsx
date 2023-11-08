import { Loading } from '../../Loading/Loading';
import { TableBodyCell } from '../TableBodyCell/TableBodyCell';
import { tableBodyCenteredCell } from './TableBody.styles';

export const TableBody = ({ children, isLoading = false }) => {
  if (isLoading) {
    return (
      <TableBodyCell colSpan="100%">
        <div css={tableBodyCenteredCell}>
          <Loading />
        </div>
      </TableBodyCell>
    );
  }
  return <tbody>{children}</tbody>;
};
