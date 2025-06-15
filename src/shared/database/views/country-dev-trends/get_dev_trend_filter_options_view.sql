CREATE OR REPLACE VIEW get_dev_trend_filter_options_view AS
WITH country_list AS (
  SELECT DISTINCT COALESCE(country, country_name) as country
  FROM public.country_dev_trends
  WHERE COALESCE(country, country_name) IS NOT NULL
  ORDER BY COALESCE(country, country_name)
),
published_date_list AS (
  SELECT DISTINCT published_date
  FROM public.country_dev_trends
  WHERE published_date IS NOT NULL
  ORDER BY published_date DESC
),
sector_list AS (
  SELECT DISTINCT sector
  FROM public.country_dev_trends
  WHERE sector IS NOT NULL
  ORDER BY sector
)
SELECT 
  array_agg(DISTINCT cl.country) as country_list,
  array_agg(DISTINCT pdl.published_date ORDER BY published_date DESC) as published_date_list,
  array_agg(DISTINCT sl.sector ORDER BY sector) as sector_list
FROM country_list cl
CROSS JOIN published_date_list pdl
CROSS JOIN sector_list sl
GROUP BY 1=1;