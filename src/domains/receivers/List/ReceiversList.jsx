import { PageHeader } from '../../../components';
import { ReceiverListContainer } from '../styles/receivers.styles';
import { ReceiverTable } from './ReceiverTable';

export const ReceiverList = ({
  onOpenDraftModal,
  onOpenValidatedModal,
  onNavigate,
  receivers,
  fetchReceiver,
}) => {
  return (
    <>
      <PageHeader onNavigate={onNavigate} />
      <ReceiverListContainer>
        <ReceiverTable
          receivers={receivers}
          onOpenDraftModal={onOpenDraftModal}
          onOpenValidatedModal={onOpenValidatedModal}
          fetchReceiver={fetchReceiver}
        />
      </ReceiverListContainer>
    </>
  );
};
