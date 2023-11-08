import { useEffect, useState } from 'react';
import receiversService from '../../../core/services/receivers';

const useListReceivers = () => {
  const PER_PAGE = 8;

  const [loading, setLoading] = useState(false);
  const [receivers, setReceivers] = useState([]);
  const [numberOfreceivers, setNumberOfReceivers] = useState(1);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    perPage: PER_PAGE,
  });

  const onChangePagination = (currentPage, perPage) => {
    if (
      currentPage === pagination.currentPage &&
      perPage === pagination.perPage
    ) {
      return;
    }

    setPagination({
      currentPage: currentPage,
      perPage: perPage,
      numberOfPages: pagination.numberOfPages,
    });
  };

  const fetchReceivers = (pagination) => {
    setLoading(true);
    return receiversService
      .list(pagination)
      .then((receivers) => setReceivers(receivers.receivers))
      .finally(() => setLoading(false));
  };

  const fetchTotalNumberOfReceivers = () => {
    return receiversService
      .getTotalNumberOfReceivers()
      .then(setNumberOfReceivers);
  };

  useEffect(() => {
    fetchReceivers(pagination);
    fetchTotalNumberOfReceivers();
  }, []);

  useEffect(() => {
    fetchReceivers(pagination);
  }, [pagination]);

  useEffect(() => {
    setPagination({
      currentPage: pagination.currentPage,
      perPage: pagination.perPage,
      numberOfPages: Math.ceil(numberOfreceivers / PER_PAGE),
    });
  }, [numberOfreceivers]);

  return {
    loading,
    receivers,
    fetchReceivers,
    pagination,
    onChangePagination,
  };
};

export default useListReceivers;
