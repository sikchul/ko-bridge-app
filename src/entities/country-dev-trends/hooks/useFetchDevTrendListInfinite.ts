import { ListItemPerPage } from '@shared/constants/app';
import { useInfiniteQuery } from '@tanstack/react-query';

import { CountryDevTrendQueryKey } from '../constants/queryKey';
import { getDevTrendList } from '../queries';
import type { GetDevTrendListParams } from '../types';
interface UseFetchDevTrendListInfinite extends Omit<GetDevTrendListParams, 'page'> {}

export const useFetchDevTrendListInfinite = ({
  searchTerm,
  country,
  year,
  sector
}: UseFetchDevTrendListInfinite) => {
  return useInfiniteQuery({
    queryKey: CountryDevTrendQueryKey.fetchDevTrendListForInfinite({
      searchTerm,
      country,
      year,
      sector
    }),
    queryFn: async ({ pageParam = 0 }) => {
      const response = await getDevTrendList({
        page: pageParam,
        searchTerm,
        country,
        year,
        sector
      });
      return response || [];
    },
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length;

      return lastPage?.items.length === 0 || lastPage?.items.length < ListItemPerPage
        ? undefined
        : nextPage;
    },
    initialPageParam: 0,
    gcTime: 0
  });
};
