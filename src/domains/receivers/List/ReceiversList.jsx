import { useState } from 'react';
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
  const [search, setSearch] = useState('');

  const handleSearchChange = (event) => {
    const value = event.currentTarget.value;

    setSearch(value);
  };

  return (
    <>
      <PageHeader
        onNavigate={onNavigate}
        handleSearchChange={handleSearchChange}
        search={search}
      />
      <ReceiverListContainer>
        <ReceiverTable
          search={search}
          receivers={receivers}
          onOpenDraftModal={onOpenDraftModal}
          onOpenValidatedModal={onOpenValidatedModal}
          fetchReceiver={fetchReceiver}
        />
      </ReceiverListContainer>
    </>
  );
};
