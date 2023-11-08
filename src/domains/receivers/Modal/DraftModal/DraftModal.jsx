import { EditReceiverForm } from '../../Form/EditReceiver/EditReceiverForm';
import { SubTitle, modalStatus } from '../../styles/receivers.styles';
import { Status } from '../../../../components/Status/Status';
import { Loading } from '../../../../components/Loading/Loading';

export const DraftModal = ({
  onCloseClick,
  onOpenDeleteModal,
  fetchReceivers,
  pagination,
  receiver,
  onCloseDraftModal,
  loading,
}) => {
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Status $customCss={modalStatus}>Rascunho</Status>
      <SubTitle>Quais os dados favorecido?</SubTitle>
      <EditReceiverForm
        onCloseClick={onCloseClick}
        onOpenDeleteModal={onOpenDeleteModal}
        receiver={receiver}
        fetchReceivers={fetchReceivers}
        pagination={pagination}
        onCloseDraftModal={onCloseDraftModal}
      />
    </>
  );
};
