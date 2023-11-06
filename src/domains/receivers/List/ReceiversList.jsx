import { PageHeader } from '../../../components';
import { ReceiverListContainer } from '../styles/receivers.styles';
import { ReceiverTable } from './ReceiverTable';

export const ReceiverList = ({ onOpenModal }) => {
  return (
    <>
      <PageHeader onOpenModal={onOpenModal} />
      <ReceiverListContainer>
        <ReceiverTable />
      </ReceiverListContainer>
    </>
  );
};
