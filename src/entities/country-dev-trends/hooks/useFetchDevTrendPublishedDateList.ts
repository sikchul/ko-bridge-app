import { useQuery } from '@tanstack/react-query';

import { CountryDevTrendQueryKey } from '../constants/queryKey';
import { getDevTrendPublishedDateList } from '../queries';

export const useFetchDevTrendPublishedDateList = () => {
  return useQuery({
    queryKey: CountryDevTrendQueryKey.fetchDevTrendPublishedDateList,
    queryFn: getDevTrendPublishedDateList
  });
};
