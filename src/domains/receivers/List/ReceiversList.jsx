import { PageHeader } from '../../../components';
import { ReceiverListContainer } from '../styles/receivers.styles';
import { ReceiverTable } from './ReceiverTable';

export const ReceiverList = ({ onOpenModal, onNavigate, receivers }) => {
  return (
    <>
      <PageHeader onOpenModal={onOpenModal} onNavigate={onNavigate} />
      <ReceiverListContainer>
        <ReceiverTable receivers={receivers} />
      </ReceiverListContainer>
    </>
  );
};
