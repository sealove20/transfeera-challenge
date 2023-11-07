import { PageHeader } from '../../../components';
import { ReceiverListContainer } from '../styles/receivers.styles';
import { ReceiverTable } from './ReceiverTable';

export const ReceiverList = ({
  onOpenModal,
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
          onOpenModal={onOpenModal}
          fetchReceiver={fetchReceiver}
        />
      </ReceiverListContainer>
    </>
  );
};
