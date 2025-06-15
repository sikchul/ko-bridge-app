import { useQuery } from '@tanstack/react-query';

import { CountryDevTrendQueryKey } from '../constants/queryKey';
import { getDevTrendSectorList } from '../queries';

export const useFetchDevTrendSectorList = () => {
  return useQuery({
    queryKey: CountryDevTrendQueryKey.fetchDevTrendSectorList,
    queryFn: getDevTrendSectorList
  });
};
