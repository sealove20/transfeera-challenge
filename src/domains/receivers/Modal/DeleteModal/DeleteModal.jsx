import { Button } from '../../../../components';
import { OutlinedButton } from '../../../../components/Button/Button';
import { useToast } from '../../../../components/ToastNotification/ToastNotification';
import useDeleteReceiver from '../../Hooks/useDeleteReceiver';
import {
  DeleteModalSubtitle,
  DeleteModalText,
  ModalActions,
  DeleteModal as SDeleteModal,
  confirmDeletionButton,
} from './DeleteModal.styles';
export const DeleteModal = ({
  onCloseDeleteModal,
  onCloseDraftModal,
  onCloseValidatedModal,
  receiver,
  fetchReceivers,
  pagination,
}) => {
  const { add: addToast } = useToast();
  const { deleteReceiver } = useDeleteReceiver();

  const onDelete = (id, event) => {
    event.preventDefault();
    deleteReceiver(id)
      .then(() => {
        addToast('Favorecido excluído com sucesso', 'success');
        fetchReceivers(pagination);
        onCloseDeleteModal();
        onCloseDraftModal();
        onCloseValidatedModal();
      })
      .catch(() => {
        addToast('Erro ao deletar um favorecido');
      });
  };

  return (
    <SDeleteModal>
      <DeleteModalSubtitle>
        Você confirma a exclusão do favorecido {receiver?.name}?
      </DeleteModalSubtitle>
      <DeleteModalText>
        O Histórico de pagamentos para este favorecido será mantido, mas ele
        será removido da sua lista de favorecidos.
      </DeleteModalText>
      <ModalActions>
        <OutlinedButton onClick={onCloseDeleteModal}>Voltar</OutlinedButton>
        <Button
          $customCss={confirmDeletionButton}
          onClick={(event) => onDelete(receiver?.id, event)}
        >
          Confirmar exclusão
        </Button>
      </ModalActions>
    </SDeleteModal>
  );
};
