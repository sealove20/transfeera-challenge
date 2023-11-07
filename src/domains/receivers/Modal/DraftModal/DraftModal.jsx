import { EditReceiverForm } from '../../Form/EditReceiver/EditReceiverForm';
import { SubTitle } from '../../styles/receivers.styles';
import { modalStatus } from './DraftModal.styles';
import { Status } from '../../../../components/Status/Status';

export const DraftModal = ({
  onCloseClick,
  onOpenDeleteModal,
  fetchReceivers,
  receiver,
  onCloseDraftModal,
}) => {
  return (
    <>
      <Status $customCss={modalStatus}>Rascunho</Status>
      <SubTitle>Quais os dados favorecido?</SubTitle>
      <EditReceiverForm
        onCloseClick={onCloseClick}
        onOpenDeleteModal={onOpenDeleteModal}
        receiver={receiver}
        fetchReceivers={fetchReceivers}
        onCloseDraftModal={onCloseDraftModal}
      />
    </>
  );
};
