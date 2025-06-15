-- country_dev_trend_id 65891 ~ 65901 : EMPTY -> 2023-11-18
-- country_dev_trend_id 63361 : EMPTY -> 2023-07-21
-- country_dev_trend_id 60448 : EMPTY -> 2023-03-01
-- country_dev_trend_id 78193 : 2005-03-28 -> 2025-03-28
CREATE OR REPLACE VIEW get_dev_trend_published_date_list_view AS
SELECT DISTINCT EXTRACT(YEAR FROM TO_DATE(country_dev_trends.published_date, 'YYYY-MM-DD')) as published_date
FROM public.country_dev_trends
WHERE country_dev_trends.published_date IS NOT NULL
ORDER BY published_date DESC;