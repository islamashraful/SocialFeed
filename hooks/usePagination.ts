import {useEffect, useState} from 'react';
import {pagination} from '../utils/pagination';

const usePagination = <T>(db: T[], pageSize: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    setIsLoading(true);
    const sliced = pagination(db, currentPage, pageSize);
    setData(sliced);
    setIsLoading(false);
  }, []);

  const handleEndReached = () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    const contentsToAppend = pagination(db, currentPage + 1, pageSize);
    if (contentsToAppend.length) {
      setCurrentPage(currentPage + 1);
      setData(prev => [...prev, ...contentsToAppend]);
    }
    setIsLoading(false);
  };

  return {
    data,
    handleEndReached,
  };
};

export default usePagination;
