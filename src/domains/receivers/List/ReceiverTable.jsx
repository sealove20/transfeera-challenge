import { TableBody } from '../../../components/Table/TableBody/TableBody';
import { TableBodyCell } from '../../../components/Table/TableBodyCell/TableBodyCell';
import { TableBodyRow } from '../../../components/Table/TableBodyRow/TableBodyRow';
import { TableContainer } from '../../../components/Table/TableContainer/TableContainer';
import { TableHeader } from '../../../components/Table/TableHeader/TableHeader';
import { TableHeaderCell } from '../../../components/Table/TableHeaderCell/TableHeaderCell';
import { TableHeaderRow } from '../../../components/Table/TableHeaderRow/TableHeaderRow';
import { TableRowBankIcon } from '../styles/receivers.styles';
import bradescoLogo from '../../../assets/bradesco-logo.svg';
import { Status } from '../../../components/Status/Status';
import { Checkbox } from '../../../components/Checkbox/Checkbox';

export const ReceiverTable = () => {
  return (
    <TableContainer>
      <TableHeader>
        <TableHeaderRow>
          <TableHeaderCell>
            <Checkbox />
          </TableHeaderCell>
          <TableHeaderCell>Favorecido</TableHeaderCell>
          <TableHeaderCell>CPF / CNPJ</TableHeaderCell>
          <TableHeaderCell>Banco</TableHeaderCell>
          <TableHeaderCell>Agência</TableHeaderCell>
          <TableHeaderCell>CC</TableHeaderCell>
          <TableHeaderCell>Status do favorecido</TableHeaderCell>
        </TableHeaderRow>
      </TableHeader>
      <TableBody>
        <TableBodyRow>
          <TableBodyCell>
            <Checkbox />
          </TableBodyCell>
          <TableBodyCell>Bárbara da Silva Silveira Fontes</TableBodyCell>
          <TableBodyCell>021.935.239-12</TableBodyCell>
          <TableBodyCell>
            <TableRowBankIcon src={bradescoLogo} />
          </TableBodyCell>
          <TableBodyCell>0814-0</TableBodyCell>
          <TableBodyCell>01002713-9</TableBodyCell>
          <TableBodyCell>
            <Status>Validado</Status>
          </TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
          <TableBodyCell>
            <Checkbox />
          </TableBodyCell>
          <TableBodyCell>Bárbara da Silva Silveira Fontes</TableBodyCell>
          <TableBodyCell>021.935.239-12</TableBodyCell>
          <TableBodyCell>
            <TableRowBankIcon src={bradescoLogo} />
          </TableBodyCell>
          <TableBodyCell>0814-0</TableBodyCell>
          <TableBodyCell>01002713-9</TableBodyCell>
          <TableBodyCell>
            <Status>Validado</Status>
          </TableBodyCell>
        </TableBodyRow>
      </TableBody>
    </TableContainer>
  );
};
