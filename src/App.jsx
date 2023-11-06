import { useState } from 'react';
import { Header, Navigation } from './components';
import { Footer } from './components/Footer/Footer';
import { Modal } from './components/Modal/Modal';
import { ReceiverList } from './domains/receivers/List/ReceiversList';

function App() {
  const [isModalVisible, setModalVisibility] = useState(false);

  const onOpenModal = () => {
    setModalVisibility(true);
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
