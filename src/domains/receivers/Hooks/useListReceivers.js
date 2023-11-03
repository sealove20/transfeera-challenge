import { useEffect, useState } from 'react';
import receiversService from '../../../core/services/receivers';

const useListReceivers = () => {
  const [loading, setLoading] = useState(false);
  const [receivers, setReceivers] = useState([]);

  const fetchReceivers = () => {
    setLoading(true);
    return receiversService
      .list()
      .then(setReceivers)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchReceivers();
  }, []);

  return {
    loading,
    receivers,
  };
};

export default useListReceivers;
