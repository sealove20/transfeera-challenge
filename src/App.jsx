import { Header, Navigation } from './components';
import { Footer } from './components/Footer/Footer';
import { ReceiverList } from './domains/receivers/List/ReceiversList';

function App() {
  return (
    <main>
      <Header />
      <Navigation />
      <ReceiverList />
      <Footer />
    </main>
  );
}

export default App;
