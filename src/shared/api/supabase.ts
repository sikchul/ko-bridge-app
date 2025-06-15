import { ENV } from '@shared/constants/config';
import type { Database as SupabaseDatabase, Tables } from '@shared/database/database.types';
import { createClient } from '@supabase/supabase-js';
import type { SetNonNullable, MergeDeep } from 'type-fest';

export type CountryDevTrendDB = Tables<'country_dev_trends'>;
export type DispatchAgenciesDB = Tables<'dispatch_agencies'>;
export type GlobalTrainingDB = Tables<'global_training'>;
export type OverseasOfficesDB = Tables<'overseas_offices'>;
export type VolunteerGuidesDB = Tables<'volunteer_guides'>;
export type DevcoopVideosDB = Tables<'devcoop_videos'>;
export type DevTrendCountryListDB = Tables<'get_dev_trend_country_list_view'>;
export type DevTrendPublishedDateListDB = Tables<'get_dev_trend_published_date_list_view'>;
export type DevTrendSectorListDB = Tables<'get_dev_trend_sector_list_view'>;
export type DevTrendFilterOptionsDB = Tables<'get_dev_trend_filter_options_view'>;

export type Database = MergeDeep<
  SupabaseDatabase,
  {
    public: {
      Views: {
        get_dev_trend_country_list_view: {
          Row: SetNonNullable<
            SupabaseDatabase['public']['Views']['get_dev_trend_country_list_view']['Row']
          >;
        };
        get_dev_trend_published_date_list_view: {
          Row: SetNonNullable<
            SupabaseDatabase['public']['Views']['get_dev_trend_published_date_list_view']['Row']
          >;
        };
        get_dev_trend_sector_list_view: {
          Row: SetNonNullable<
            SupabaseDatabase['public']['Views']['get_dev_trend_sector_list_view']['Row']
          >;
        };
        get_dev_trend_filter_options_view: {
          Row: SetNonNullable<
            SupabaseDatabase['public']['Views']['get_dev_trend_filter_options_view']['Row']
          >;
        };
      };
    };
  }
>;

export const supabase = createClient<SupabaseDatabase>(ENV.supabase.url, ENV.supabase.anonKey);
