import { Header, Navigation } from './components';
import { ReceiverList } from './domains/receivers/List/ReceiversList';

function App() {
  return (
    <main>
      <Header />
      <Navigation />
      <ReceiverList />
    </main>
  );
}

export default App;
