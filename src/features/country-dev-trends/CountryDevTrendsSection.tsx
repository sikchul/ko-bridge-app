import { useFetchDevTrendCountryList } from '@entities/country-dev-trends/hooks';

export default function CountryDevTrendsSection() {
  const { data: devTrendCountryList } = useFetchDevTrendCountryList();
  return <div>{devTrendCountryList?.map((country) => country)}</div>;
}
