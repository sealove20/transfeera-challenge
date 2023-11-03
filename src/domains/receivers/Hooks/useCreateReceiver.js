import { useState } from 'react';
import receiversService from '../../../core/services/receivers';

const useCreateReceiver = () => {
  const [loading, setLoading] = useState(false);

  const createReceiver = (receiver) => {
    setLoading(true);
    return receiversService
      .createReceiver(receiver)
      .finally(() => setLoading(false));
  };

  return {
    loading,
    createReceiver,
  };
};

export default useCreateReceiver;
