import { PageHeader } from '../../../components';
import { ReceiverListContainer } from '../styles/receivers.styles';
import { ReceiverTable } from './ReceiverTable';

export const ReceiverList = ({ onOpenModal, onNavigate }) => {
  return (
    <>
      <PageHeader onOpenModal={onOpenModal} onNavigate={onNavigate} />
      <ReceiverListContainer>
        <ReceiverTable />
      </ReceiverListContainer>
    </>
  );
};
