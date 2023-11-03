import { useState } from 'react';
import receiversService from '../../../core/services/receivers';

const useEditReceiver = () => {
  const [loading, setLoading] = useState(false);

  const editReceiver = (receiver) => {
    setLoading(true);
    return receiversService
      .editReceiver(receiver, receiver.id)
      .finally(() => setLoading(false));
  };

  return {
    loading,
    editReceiver,
  };
};

export default useEditReceiver;
