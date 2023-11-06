import { useState } from 'react';
import { Header, Navigation } from './components';
import { Footer } from './components/Footer/Footer';
import { Modal } from './components/Modal/Modal';
import { ReceiverList } from './domains/receivers/List/ReceiversList';
import { useToast } from './components/ToastNotification/ToastNotification';

function App() {
  const [isModalVisible, setModalVisibility] = useState(false);
  const { add: addToast } = useToast();

  const onOpenModal = () => {
    addToast('Informe um e-mail válido');
  };
  const onCloseModal = () => {
    setModalVisibility(false);
  };

  return (
    <main>
      <Header />
      <Navigation />
      <ReceiverList onOpenModal={onOpenModal} />
      <Footer />
      <Modal isVisible={isModalVisible} onCloseClick={onCloseModal} />
    </main>
  );
}

export default App;
