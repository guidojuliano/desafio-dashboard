import { useQuery } from 'react-query';

const fetchData = async () => {
  const response = await fetch('api/data.json');
  if (!response.ok) {
    throw new Error('Error al cargar los datos');
  }
  return response.json();
};

const useData = () => {
  return useQuery('data', fetchData);
};

export default useData;
