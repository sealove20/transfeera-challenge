import { useState } from 'react';
import { Header, Navigation } from './components';
import { Footer } from './components/Footer/Footer';
import { Modal } from './components/Modal/Modal';
import { ReceiverList } from './domains/receivers/List/ReceiversList';
import { CreateReceiver } from './domains/receivers/Create/CreateReceiver';
import useListReceivers from './domains/receivers/Hooks/useListReceivers';
import {
  deleteModal,
  deleteModalBackdrop,
  draftModal,
} from './domains/receivers/styles/receivers.styles';
import { DraftModal } from './domains/receivers/Modal/DraftModal/DraftModal';
import useGetReceiver from './domains/receivers/Hooks/useGetReceiver';
import { DeleteModal } from './domains/receivers/Modal/DeleteModal/DeleteModal';
import { ValidatedReceiverModal } from './domains/receivers/Modal/ValidatedReceiverModal/ValidatedReceiverModal';

function App() {
  const [isDraftModalVisible, setDraftModalVisibility] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisibility] = useState(false);
  const [isValidatedModalVisible, setValidatedModalVisibility] =
    useState(false);
  const [navigation, setNavigation] = useState('home');

  const {
    receivers,
    fetchReceivers,
    pagination,
    onChangePagination,
    loading: receiversListLoading,
  } = useListReceivers();
  const {
    receiver,
    fetchReceiver,
    loading: getReceiverLoading,
  } = useGetReceiver();

  const navigateToHome = () => setNavigation('home');
  const navigateToCreateForm = () => setNavigation('create-receiver');

  const onOpenDraftModal = () => {
    setDraftModalVisibility(true);
  };
  const onCloseDraftModal = () => {
    setDraftModalVisibility(false);
  };

  const onOpenDeleteModal = () => {
    setDeleteModalVisibility(true);
  };
  const onCloseDeleteModal = () => {
    setDeleteModalVisibility(false);
  };

  const onOpenValidatedModal = () => {
    setValidatedModalVisibility(true);
  };
  const onCloseValidatedModal = () => {
    setValidatedModalVisibility(false);
  };

  const isHomeScreen = navigation === 'home';

  return (
    <main>
      <Header />
      <Navigation isHome={isHomeScreen} onCloseClick={navigateToHome} />
      {isHomeScreen ? (
        <>
          <ReceiverList
            onOpenDraftModal={onOpenDraftModal}
            onOpenValidatedModal={onOpenValidatedModal}
            onNavigate={navigateToCreateForm}
            receivers={receivers}
            fetchReceiver={fetchReceiver}
            pagination={pagination}
            onChangePagination={onChangePagination}
            loading={receiversListLoading}
            fetchReceivers={fetchReceivers}
          />
          <Footer />
        </>
      ) : (
        <CreateReceiver
          navigateToHome={navigateToHome}
          fetchReceivers={fetchReceivers}
          pagination={pagination}
        />
      )}
      <Modal
        $customCss={draftModal}
        isVisible={isDraftModalVisible}
        onCloseClick={onCloseDraftModal}
        title={receiver?.name}
      >
        <DraftModal
          onCloseClick={onCloseDraftModal}
          onOpenDeleteModal={onOpenDeleteModal}
          receiver={receiver}
          fetchReceivers={fetchReceivers}
          onCloseDraftModal={onCloseDraftModal}
          pagination={pagination}
          loading={getReceiverLoading}
        />
      </Modal>
      <Modal
        $customCss={draftModal}
        isVisible={isValidatedModalVisible}
        onCloseClick={onCloseValidatedModal}
        title={receiver?.name}
      >
        <ValidatedReceiverModal
          onCloseClick={onCloseValidatedModal}
          onOpenDeleteModal={onOpenDeleteModal}
          receiver={receiver}
          fetchReceivers={fetchReceivers}
          onCloseValidatedModal={onCloseValidatedModal}
          pagination={pagination}
          loading={getReceiverLoading}
        />
      </Modal>
      <Modal
        title="Excluir favorecido"
        $customCss={deleteModal}
        $customBackgropCss={deleteModalBackdrop}
        isVisible={isDeleteModalVisible}
        onCloseClick={onCloseDeleteModal}
      >
        <DeleteModal
          onCloseDeleteModal={onCloseDeleteModal}
          onCloseDraftModal={onCloseDraftModal}
          onCloseValidatedModal={onCloseValidatedModal}
          receiver={receiver}
          fetchReceivers={fetchReceivers}
          pagination={pagination}
        />
      </Modal>
    </main>
  );
}

export default App;
