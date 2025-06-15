import type { GetDevTrendListParams } from '../types';

export const CountryDevTrendQueryKey = {
  fetchDevTrendCountryList: ['fetchDevTrendCountryList'] as const,
  fetchDevTrendPublishedDateList: ['fetchDevTrendPublishedDateList'] as const,
  fetchDevTrendSectorList: ['fetchDevTrendSectorList'] as const,
  fetchDevTrendListForInfinite: (params: Omit<GetDevTrendListParams, 'page'>) =>
    ['fetchDevTrendListForInfinite', { ...params }] as const
};
