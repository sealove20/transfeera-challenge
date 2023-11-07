import { CreateReceiverForm } from '../Form/CreateReceiver/CreateReceiverForm';

export const CreateReceiver = ({ navigateToHome, fetchReceivers }) => {
  return (
    <CreateReceiverForm
      navigateToHome={navigateToHome}
      fetchReceivers={fetchReceivers}
    />
  );
};
