import { useQuery } from '@tanstack/react-query';

import { CountryDevTrendQueryKey } from '../constants/queryKey';
import { getDevTrendCountryList } from '../queries';

export const useFetchDevTrendCountryList = () => {
  return useQuery({
    queryKey: CountryDevTrendQueryKey.fetchDevTrendCountryList,
    queryFn: getDevTrendCountryList
  });
};
