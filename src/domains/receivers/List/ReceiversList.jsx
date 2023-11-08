import { useState } from 'react';
import { PageHeader } from '../../../components';
import { ReceiverListContainer } from '../styles/receivers.styles';
import { ReceiverTable } from './ReceiverTable';
import { Pagination } from '../../../components/Pagination/Pagination';

export const ReceiverList = ({
  onOpenDraftModal,
  onOpenValidatedModal,
  onNavigate,
  receivers,
  fetchReceiver,
  pagination,
  onChangePagination,
  loading,
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
          loading={loading}
        />
      </ReceiverListContainer>
      <Pagination
        pagination={pagination}
        onChangePagination={onChangePagination}
      />
    </>
  );
};
