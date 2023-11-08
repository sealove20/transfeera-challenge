import { CreateReceiverForm } from '../Form/CreateReceiver/CreateReceiverForm';

export const CreateReceiver = ({
  navigateToHome,
  fetchReceivers,
  pagination,
}) => {
  return (
    <CreateReceiverForm
      navigateToHome={navigateToHome}
      fetchReceivers={fetchReceivers}
      pagination={pagination}
    />
  );
};
