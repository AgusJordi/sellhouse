import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../config/axios';

const fetchProperties = async () => {
  const { data } = await axiosInstance.post('/search-for-sale', {
      location: 'New York, NY',
      sort: 'days', 
      limit: 10 
  });
  return data;
};

const useProperties = () => {
  return useQuery({
    queryKey: ['properties'],
    queryFn: fetchProperties
  });
};

export default useProperties;
