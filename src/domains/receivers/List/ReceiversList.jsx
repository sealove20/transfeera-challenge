import { useState } from 'react';
import { Button, PageHeader } from '../../../components';
import {
  ReceiverListContainer,
  batchDeleteButton,
  deleteModal,
  deleteModalBackdrop,
} from '../styles/receivers.styles';
import { ReceiverTable } from './ReceiverTable';
import { Pagination } from '../../../components/Pagination/Pagination';
import { Modal } from '../../../components/Modal/Modal';
import { BatchDeleteModal } from '../Modal/BatchDeleteModal/BatchDeleteModal';

export const ReceiverList = ({
  onOpenDraftModal,
  onOpenValidatedModal,
  onNavigate,
  receivers,
  fetchReceiver,
  pagination,
  onChangePagination,
  loading,
  fetchReceivers,
}) => {
  const [search, setSearch] = useState('');
  const [selectedReceiversId, setSelectedReceiversId] = useState([]);
  const [isBatchDeleteModalVisible, setBatchDeleteModalVisibility] =
    useState(false);

  const onOpenBatchDeleteModal = () => {
    setBatchDeleteModalVisibility(true);
  };
  const onCloseBatchDeleteModal = () => {
    setBatchDeleteModalVisibility(false);
  };

  const onBatchDelete = () => {
    onOpenBatchDeleteModal();
  };

  const handleSearchChange = (event) => {
    const value = event.currentTarget.value;

    setSearch(value);
  };

  const onSelectTicket = (receiverId) => {
    if (selectedReceiversId.includes(receiverId)) {
      setSelectedReceiversId(
        selectedReceiversId.filter((id) => id !== receiverId),
      );
    } else {
      setSelectedReceiversId([...selectedReceiversId, receiverId]);
    }
  };

  const onSelectAll = () => {
    if (selectedReceiversId.length === receivers.length) {
      setSelectedReceiversId([]);
    } else {
      setSelectedReceiversId(receivers.map((receiver) => receiver.id));
    }
  };

  const isAllSelected = selectedReceiversId.length === receivers.length;
  const isSelectedItemsEmpty = selectedReceiversId.length === 0;

  return (
    <>
      <PageHeader
        onNavigate={onNavigate}
        handleSearchChange={handleSearchChange}
        search={search}
      />
      <Button
        $isShown={isSelectedItemsEmpty}
        $customCss={batchDeleteButton}
        onClick={() => onBatchDelete(selectedReceiversId)}
      >
        Excluir selecionados
      </Button>
      <ReceiverListContainer $isBatchDeleteButtonShown={isSelectedItemsEmpty}>
        <ReceiverTable
          search={search}
          receivers={receivers}
          onOpenDraftModal={onOpenDraftModal}
          onOpenValidatedModal={onOpenValidatedModal}
          fetchReceiver={fetchReceiver}
          loading={loading}
          onSelectTicket={onSelectTicket}
          onSelectAll={onSelectAll}
          selectedReceiversId={selectedReceiversId}
          isAllSelected={isAllSelected}
        />
      </ReceiverListContainer>
      <Pagination
        pagination={pagination}
        onChangePagination={onChangePagination}
        setSelectedReceiversId={setSelectedReceiversId}
      />
      <Modal
        title="Excluir lote de favorecidos"
        $customCss={deleteModal}
        $customBackgropCss={deleteModalBackdrop}
        isVisible={isBatchDeleteModalVisible}
        onCloseClick={onCloseBatchDeleteModal}
      >
        <BatchDeleteModal
          onCloseBatchDeleteModal={onCloseBatchDeleteModal}
          fetchReceivers={fetchReceivers}
          pagination={pagination}
          selectedReceiversId={selectedReceiversId}
        />
      </Modal>
    </>
  );
};
