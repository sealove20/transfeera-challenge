import { PageHeader } from '../../../components';
import { ReceiverListContainer } from '../styles/receivers.styles';
import { ReceiverTable } from './ReceiverTable';

export const ReceiverList = () => {
  return (
    <>
      <PageHeader />
      <ReceiverListContainer>
        <ReceiverTable />
      </ReceiverListContainer>
    </>
  );
};
