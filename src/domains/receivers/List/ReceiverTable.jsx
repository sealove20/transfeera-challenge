import { TableBody } from '../../../components/Table/TableBody/TableBody';
import { TableBodyCell } from '../../../components/Table/TableBodyCell/TableBodyCell';
import { TableBodyRow } from '../../../components/Table/TableBodyRow/TableBodyRow';
import { TableContainer } from '../../../components/Table/TableContainer/TableContainer';
import { TableHeader } from '../../../components/Table/TableHeader/TableHeader';
import { TableHeaderCell } from '../../../components/Table/TableHeaderCell/TableHeaderCell';
import { TableHeaderRow } from '../../../components/Table/TableHeaderRow/TableHeaderRow';
import { TableRowBankIcon } from '../styles/receivers.styles';
import bradescoLogo from '../../../assets/bradesco-logo.svg';
import caixaLogo from '../../../assets/caixa-logo.svg';
import sicoobLogo from '../../../assets/sicoob-logo.svg';
import otherLogo from '../../../assets/bank-logo-placeholder.svg';
import { Status } from '../../../components/Status/Status';
import { Checkbox } from '../../../components/Checkbox/Checkbox';
import { addDashAtTheEnd, maskCnpj, maskCpf } from '../../../common-functions';

const mapBankToLogo = {
  bradesco: bradescoLogo,
  caixa: caixaLogo,
  sicoob: sicoobLogo,
};

export const ReceiverTable = ({ receivers }) => {
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
        {receivers?.map(
          ({ id, name, taxId, bankName, branch, account, status }) => (
            <TableBodyRow key={id}>
              <TableBodyCell>
                <Checkbox />
              </TableBodyCell>
              <TableBodyCell>{name}</TableBodyCell>
              <TableBodyCell>
                {taxId && taxId.length <= 11 ? maskCpf(taxId) : maskCnpj(taxId)}
              </TableBodyCell>
              <TableBodyCell>
                <TableRowBankIcon
                  src={mapBankToLogo[bankName?.toLowerCase()] || otherLogo}
                />
              </TableBodyCell>
              <TableBodyCell>
                {branch && addDashAtTheEnd(branch.toString())}
              </TableBodyCell>
              <TableBodyCell>
                {account && addDashAtTheEnd(account.toString())}
              </TableBodyCell>
              <TableBodyCell>
                <Status $status={status}>{status}</Status>
              </TableBodyCell>
            </TableBodyRow>
          ),
        )}
      </TableBody>
    </TableContainer>
  );
};
