import { supabase } from '@shared/api/supabase';
import { ListItemPerPage } from '@shared/constants/app';

import type {
  GetDevTrendCountryListResponse,
  GetDevTrendListParams,
  GetDevTrendListResponse,
  GetDevTrendPublishedDateListResponse,
  GetDevTrendSectorListResponse
} from './types';

export const getDevTrendCountryList = async (): Promise<GetDevTrendCountryListResponse> => {
  const { data, error } = await supabase.from('get_dev_trend_country_list_view').select('*');

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map((item) => item.country);
};

export const getDevTrendPublishedDateList =
  async (): Promise<GetDevTrendPublishedDateListResponse> => {
    const { data, error } = await supabase
      .from('get_dev_trend_published_date_list_view')
      .select('*');

    if (error) {
      throw new Error(error.message);
    }

    return (data ?? []).map((item) => item.published_date);
  };

export const getDevTrendSectorList = async (): Promise<GetDevTrendSectorListResponse> => {
  const { data, error } = await supabase.from('get_dev_trend_sector_list_view').select('*');

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map((item) => item.sector);
};

export const getDevTrendList = async ({
  page,
  searchTerm,
  country,
  year,
  sector
}: GetDevTrendListParams): Promise<GetDevTrendListResponse> => {
  const from = page * ListItemPerPage;
  const to = from + ListItemPerPage - 1;

  let query = supabase.from('country_dev_trends').select('*', { count: 'exact' });

  if (searchTerm) {
    query = query.or(
      `title.ilike.%${searchTerm}%,content_1.ilike.%${searchTerm}%,content_2.ilike.%${searchTerm}%,content_3.ilike.%${searchTerm}%,content_4.ilike.%${searchTerm}%,content_5.ilike.%${searchTerm}%`
    );
  }

  if (country) {
    query = query.or(`country.eq.${country},country_name.eq.${country}`);
  }

  if (year) {
    query = query.ilike('published_date', `${year}%`);
  }

  if (sector) {
    query = query.eq('sector', sector);
  }

  query = query
    .order('country_dev_trend_id', { ascending: false })
    .order('published_date', { ascending: false })
    .range(from, to);

  const { data, error, count } = await query;

  if (error) {
    throw new Error(error.message);
  }

  return {
    items: data,
    totalCount: count ?? 0
  };
};
