import type {
  CountryDevTrendDB,
  DevTrendCountryListDB,
  DevTrendPublishedDateListDB,
  DevTrendSectorListDB
} from '@shared/api/supabase';

export type GetDevTrendCountryListResponse = DevTrendCountryListDB['country'][];
export type GetDevTrendPublishedDateListResponse = DevTrendPublishedDateListDB['published_date'][];
export type GetDevTrendSectorListResponse = DevTrendSectorListDB['sector'][];

export interface GetDevTrendListParams {
  page: number;
  searchTerm?: string;
  country?: string;
  year?: string;
  sector?: string;
}

export interface GetDevTrendListResponse {
  items: CountryDevTrendDB[];
  totalCount: number;
}
