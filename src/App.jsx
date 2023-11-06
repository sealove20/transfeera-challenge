import { useState } from 'react';
import { Header, Navigation } from './components';
import { Footer } from './components/Footer/Footer';
import { Modal } from './components/Modal/Modal';
import { ReceiverList } from './domains/receivers/List/ReceiversList';
import { useToast } from './components/ToastNotification/ToastNotification';
import { CreateReceiver } from './domains/receivers/Create/CreateReceiver';

function App() {
  const [isModalVisible, setModalVisibility] = useState(false);
  const [navigation, setNavigation] = useState('home');
  const { add: addToast } = useToast();

  const navigateToHome = () => setNavigation('home');
  const navigateToCreateForm = () => setNavigation('create-receiver');

  const onOpenModal = () => {
    addToast('Informe um e-mail válido');
  };
  const onCloseModal = () => {
    setModalVisibility(false);
  };

  const isHomeScreen = navigation === 'home';

  return (
    <main>
      <Header />
      <Navigation isHome={isHomeScreen} onCloseClick={navigateToHome} />
      {isHomeScreen ? (
        <ReceiverList
          onOpenModal={onOpenModal}
          onNavigate={navigateToCreateForm}
        />
      ) : (
        <CreateReceiver navigateToHome={navigateToHome} />
      )}
      <Footer />
      <Modal isVisible={isModalVisible} onCloseClick={onCloseModal} />
    </main>
  );
}

export default App;
