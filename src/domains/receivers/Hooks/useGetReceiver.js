import { useState } from 'react';
import receiversService from '../../../core/services/receivers';

const useGetReceiver = () => {
  const [loading, setLoading] = useState(false);
  const [receiver, setReceiver] = useState([]);

  const fetchReceiver = (receiverId) => {
    setLoading(true);
    return receiversService
      .getById(receiverId)
      .then(setReceiver)
      .finally(() => setLoading(false));
  };

  return {
    loading,
    receiver,
    fetchReceiver,
  };
};

export default useGetReceiver;
