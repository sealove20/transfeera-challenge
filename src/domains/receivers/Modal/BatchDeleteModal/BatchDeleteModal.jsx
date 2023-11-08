import { Button } from '../../../../components';
import { OutlinedButton } from '../../../../components/Button/Button';
import { useToast } from '../../../../components/ToastNotification/ToastNotification';
import useDeleteReceiver from '../../Hooks/useDeleteReceiver';
import {
  BatchDeleteModalModalSubtitle,
  BatchDeleteModalModalText,
  ModalActions,
  BatchDeleteModal as SBatchDeleteModal,
  confirmDeletionButton,
} from './BatchDeleteModal.styles';
export const BatchDeleteModal = ({
  onCloseBatchDeleteModal,
  fetchReceivers,
  pagination,
  selectedReceiversId,
}) => {
  const { add: addToast } = useToast();
  const { deleteReceiver } = useDeleteReceiver();

  const onDelete = (event) => {
    event.preventDefault();
    selectedReceiversId.forEach((receiverId) => {
      deleteReceiver(receiverId);
    });
    fetchReceivers(pagination);
    onCloseBatchDeleteModal();
    addToast('Lote excluído com sucesso', 'success');
  };

  return (
    <SBatchDeleteModal>
      <BatchDeleteModalModalSubtitle>
        Você confirma a exclusão do lote de favorecidos?
      </BatchDeleteModalModalSubtitle>
      <BatchDeleteModalModalText>
        O Histórico de pagamentos de todos os favorecidos será mantido, mas eles
        serão removidos da sua lista de favorecidos.
      </BatchDeleteModalModalText>
      <ModalActions>
        <OutlinedButton onClick={onCloseBatchDeleteModal}>
          Voltar
        </OutlinedButton>
        <Button
          $customCss={confirmDeletionButton}
          onClick={(event) => onDelete(event)}
        >
          Confirmar exclusão
        </Button>
      </ModalActions>
    </SBatchDeleteModal>
  );
};
