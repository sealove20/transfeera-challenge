import { TableBody } from '../../../components/Table/TableBody/TableBody';
import { TableBodyCell } from '../../../components/Table/TableBodyCell/TableBodyCell';
import { TableBodyRow } from '../../../components/Table/TableBodyRow/TableBodyRow';
import { TableContainer } from '../../../components/Table/TableContainer/TableContainer';
import { TableHeader } from '../../../components/Table/TableHeader/TableHeader';
import { TableHeaderCell } from '../../../components/Table/TableHeaderCell/TableHeaderCell';
import { TableHeaderRow } from '../../../components/Table/TableHeaderRow/TableHeaderRow';
import {
  TableRowBankIcon,
  capitalizedStatus,
  clickable,
} from '../styles/receivers.styles';
import bradescoLogo from '../../../assets/bradesco-logo.svg';
import caixaLogo from '../../../assets/caixa-logo.svg';
import sicoobLogo from '../../../assets/sicoob-logo.svg';
import otherLogo from '../../../assets/bank-logo-placeholder.svg';
import { Status } from '../../../components/Status/Status';
import { Checkbox } from '../../../components/Checkbox/Checkbox';
import {
  addDashBeforeLast,
  maskCnpj,
  maskCpf,
} from '../../../common-functions';

const mapBankToLogo = {
  bradesco: bradescoLogo,
  caixa: caixaLogo,
  sicoob: sicoobLogo,
};

export const ReceiverTable = ({
  receivers,
  onOpenDraftModal,
  onOpenValidatedModal,
  fetchReceiver,
  search,
  loading,
  onSelectTicket,
  onSelectAll,
  selectedReceiversId,
  isAllSelected,
}) => {
  const onNameClick = (id, status) => {
    fetchReceiver(id)
      .then(() => {
        status === 'rascunho' ? onOpenDraftModal() : onOpenValidatedModal();
      })
      .catch(() => {
        addToast('Erro ao buscar um favorecido');
      });
  };
  const getFilteredReceivers = () => {
    return receivers.filter((receiver) => {
      return (
        receiver?.name?.toLowerCase().includes(search.toLowerCase()) ||
        receiver?.taxId?.toLowerCase().includes(search.toLowerCase()) ||
        receiver?.branch?.toLowerCase().includes(search.toLowerCase()) ||
        receiver?.account?.toLowerCase().includes(search.toLowerCase())
      );
    });
  };

  return (
    <TableContainer>
      <TableHeader>
        <TableHeaderRow>
          <TableHeaderCell>
            <Checkbox onClick={onSelectAll} checked={isAllSelected} />
          </TableHeaderCell>
          <TableHeaderCell>Favorecido</TableHeaderCell>
          <TableHeaderCell>CPF / CNPJ</TableHeaderCell>
          <TableHeaderCell>Banco</TableHeaderCell>
          <TableHeaderCell>Agência</TableHeaderCell>
          <TableHeaderCell>CC</TableHeaderCell>
          <TableHeaderCell>Status do favorecido</TableHeaderCell>
        </TableHeaderRow>
      </TableHeader>
      <TableBody isLoading={loading}>
        {getFilteredReceivers()?.map(
          ({ id, name, taxId, bankName, branch, account, status }) => (
            <TableBodyRow key={id}>
              <TableBodyCell>
                <Checkbox
                  onClick={() => onSelectTicket(id)}
                  checked={selectedReceiversId.includes(id)}
                />
              </TableBodyCell>
              <TableBodyCell
                $customCss={clickable}
                onClick={() => onNameClick(id, status)}
              >
                {name}
              </TableBodyCell>
              <TableBodyCell>
                {taxId && taxId.length <= 11 ? maskCpf(taxId) : maskCnpj(taxId)}
              </TableBodyCell>
              <TableBodyCell>
                <TableRowBankIcon
                  src={mapBankToLogo[bankName?.toLowerCase()] || otherLogo}
                />
              </TableBodyCell>
              <TableBodyCell>
                {branch && addDashBeforeLast(branch.toString())}
              </TableBodyCell>
              <TableBodyCell>
                {account && addDashBeforeLast(account.toString())}
              </TableBodyCell>
              <TableBodyCell>
                <Status $customCss={capitalizedStatus} $status={status}>
                  {status}
                </Status>
              </TableBodyCell>
            </TableBodyRow>
          ),
        )}
      </TableBody>
    </TableContainer>
  );
};
