import {
  addDashAtTheEnd,
  maskCnpj,
  maskCpf,
} from '../../../../common-functions';
import { Loading } from '../../../../components/Loading/Loading';
import { Status } from '../../../../components/Status/Status';
import { ValidatedReceiverForm } from '../../Form/ValidatedReceiver/ValidatedReceiverForm';
import { modalStatus } from '../../styles/receivers.styles';

import {
  FieldText,
  FieldTextGroup,
  Text,
  Title,
} from './ValidatedReceiverModal.styles';

export const ValidatedReceiverModal = ({
  receiver,
  onCloseClick,
  onOpenDeleteModal,
  fetchReceivers,
  pagination,
  onCloseValidatedModal,
  loading,
}) => {
  const { status, taxId, bankName, branch, account, accountType } = receiver;

  const maskedTaxId = taxId?.length <= 11 ? maskCpf(taxId) : maskCnpj(taxId);
  const maskedBranch = addDashAtTheEnd(branch);
  const maskedAccount = addDashAtTheEnd(account);
  const formatedAccountType =
    accountType === 'corrente' ? 'Conta Corrente' : 'Conta Poupança';

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Status $customCss={modalStatus} $status={status}>
        Validado
      </Status>
      <FieldText>
        <Title>CPF / CNPJ</Title>
        <Text>{maskedTaxId}</Text>
      </FieldText>
      <FieldTextGroup>
        <FieldText>
          <Title>Banco</Title>
          <Text>{bankName}</Text>
        </FieldText>
        <FieldText>
          <Title>Agência</Title>
          <Text>{maskedBranch}</Text>
        </FieldText>
      </FieldTextGroup>
      <FieldTextGroup>
        <FieldText>
          <Title>Tipo de conta</Title>
          <Text>{formatedAccountType}</Text>
        </FieldText>
        <FieldText>
          <Title>{formatedAccountType}</Title>
          <Text>{maskedAccount}</Text>
        </FieldText>
      </FieldTextGroup>
      <ValidatedReceiverForm
        onCloseClick={onCloseClick}
        onOpenDeleteModal={onOpenDeleteModal}
        receiver={receiver}
        fetchReceivers={fetchReceivers}
        onCloseValidatedModal={onCloseValidatedModal}
        pagination={pagination}
      />
    </>
  );
};
