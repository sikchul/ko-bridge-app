-- country: kdsla -> 네팔, country: 62 -> 제거
CREATE OR REPLACE VIEW get_dev_trend_country_list_view AS
SELECT DISTINCT COALESCE(country_dev_trends.country, country_dev_trends.country_name) as country
FROM public.country_dev_trends
WHERE COALESCE(country_dev_trends.country, country_dev_trends.country_name) IS NOT NULL
  AND COALESCE(country_dev_trends.country, country_dev_trends.country_name) != '';