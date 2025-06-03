import { supabase } from '@shared/api/supabase';

export const getDevTrendCountryList = async () => {
  const { data, error } = await supabase.from('get_dev_trend_country_list_view').select('*');

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map((item) => item.country);
};
