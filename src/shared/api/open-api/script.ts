// import { supabase } from '../supabase';
import { getCountryDevTrends } from './country-dev-trends';

async function upsertCountryDevTrends() {
  const countryDevTrends = await getCountryDevTrends({});
  console.log(countryDevTrends);
  // const { error } = await supabase.from('country_dev_trends').upsert(countryDevTrends, {
  //   onConflict: 'country_dev_trend_id'
  // });
  // if (error) {
  //   console.error('Supabase upsert error:', error);
  //   throw error;
  // }
}

async function main() {
  console.log('Upserting to Supabase...');
  await upsertCountryDevTrends();
  console.log('Done.');
}

main().catch(console.error);
