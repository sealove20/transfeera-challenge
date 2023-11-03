import { useState } from 'react';
import receiversService from '../../../core/services/receivers';

const useDeleteReceiver = () => {
  const [loading, setLoading] = useState(false);

  const deleteReceiver = (receiverId) => {
    setLoading(true);
    return receiversService
      .deleteReceiver(receiverId)
      .finally(() => setLoading(false));
  };

  return {
    loading,
    deleteReceiver,
  };
};

export default useDeleteReceiver;
